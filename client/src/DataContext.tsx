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

    // Mit useEffect wird versichert, dass die Datenabfrage nur 
    // beim ersten Laden der Seite getätigt wird.
    // Notiz: Die folgende Logik ist bei allen Abfragen relativ ähnlich, daher können die folgenden Beschreibungen
    // auf alle Abfragen angewandt werden.
    useEffect(() => {
        // Die Datenabfrage beginnt, daher wird die Lade-Zustandsvariable auf true gesetzt.
        setLoading(true);

        // Hier werden die Daten von der API abgegfragt.
        // setTodos, setError und setLoading sind Methoden der useState Hook,
        // mit der man in React reaktiven Zustand der Applikation managen kann.
        fetch(API_URL)
        .then((res) => {
            // Wenn das Resultat nicht 'ok' ist, wird ein Fehler ausgelöst.
            if (!res.ok) throw new Error("Todos konnten nicht geladen werden.");
            // Ansonsten wird das Resultat zu JSON geparsed und zurückgegeben.
            return res.json();
        })
        // Die Todos werden nun per setTodos in der richtigen Zustandsvariable gespeichert.
        .then((data) => setTodos(data))
        // Falls ein Fehler auftritt, wird dieser in der entsprechenden Zustandsvariablen gespeichert.
        .catch((err) => setError(err))
        // Da die Datenabfrage nun beendet ist, kann die Lade-Zustandsvariable wieder auf false gesetzt werden.
        .finally(() => setLoading(false));
    }, []);

    // Abfrage zum erstellen eines neuen Todos
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

  // Abfrage zum Löschen eines Todos
    const deleteById = (id: string) => {
    }

    // Abfrage zum Updaten eines Todos
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