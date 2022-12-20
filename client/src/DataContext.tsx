import { createContext, useContext, useEffect, useState } from "react";

const API_URL = "http://localhost:5002/todos";

type TodosDataContext = {
    todos: Todo[];
    error: Error | null;
    loading: boolean;
    create: (name: string) => void;
    deleteById: (id: string) => void;
    updateById: (id: string, data: Todo) => void;
}

const Context = createContext<TodosDataContext>({
    todos: [],
    loading: false,
    error: null,
    create: (name: string) => {},
    deleteById: (id: string) => {},
    updateById: (id: string, data: Todo) => {}
});

export const TodosDataProvider = ({ children }: any) => {
    // In dieser Zustandsvariable wird das Ergebniss der Datenabfrage,
    // also die Todos, gespeichert.
    const [todos, setTodos] = useState<Todo[]>([]);

    // In dieser Zustandsvariable wird festgehalten, 
    // ob die Daten noch am laden, oder bereits vorhanden sind.
    const [loading, setLoading] = useState<boolean>(true);

    // In dieser Zustandsvariable wird ein eventueller Fehler bei der 
    // Datenabfrage festgehalten, falls einer auftreten sollte.
    const [error, setError] = useState(null);

    // Mit useEffect wird Verhindert, dass die Datenabfrage nur 
    // beim ersten Laden der Seite getätigt wird.
    useEffect(() => {
        setLoading(true);

        // Hier werden die Daten von der API abgegfragt.
        // setTodos, setError und setLoading sind Methoden der useState Hook,
        // mit der man in React reaktiven Zustand der Applikation managen kann.
        fetch(API_URL)
        .then((res) => {
            if (!res.ok) throw new Error("Bogos :(");
            return res.json();
        })
        .then((data) => setTodos(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

    }, []);

    const create = (todoName: string) => {
        setLoading(true);

        const body = {
            todo: todoName 
        };

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if (!res.ok) throw new Error("Oh no :(");
            return res.json();
        })
        .then((data) => {
            const newTodo: Todo = data;
            setTodos([...todos, newTodo]);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
  }

    const deleteById = (id: string) => {
    }

    const updateById = (id: string, data: Todo) => {
        setLoading(true);

        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }).then((res) => {
            if (!res.ok) throw new Error("Todo konnte nicht geändert werden.");
            setTodos((current) => 
                current.map(t => {
                    if (t.id === id) return data;
                    return t;
                })
            );
        }).catch((err) => setError(err))
        .finally(() => setLoading(false));
    }

    return (
        <Context.Provider value={{todos, loading, error, create, deleteById, updateById}}>
            {children} 
        </Context.Provider>
    )
}

export const useTodos = () => useContext(Context);