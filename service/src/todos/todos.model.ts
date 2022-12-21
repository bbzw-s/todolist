import { v4 as uuid } from "uuid";

let todos: Todo[] = [];

export default class Todo {
  public readonly id: string;
  public readonly title: string;
  public done: boolean;

  constructor(title: string, done: boolean = false) {
    this.id = uuid();
    this.title = title;
    this.done = done;
  }

  save() {
    todos.push(this);
    console.log(todos);
  }

  static delete(id: string) {
    todos.splice(
      todos.findIndex((t) => t.id === id),
      1
    );
    console.log(todos);
  }

  static update(id: string, done: boolean) {
    console.log(id);
    todos = todos.map((t) => {
      if (t.id === id) {
        t.done = done;
        return t;
      };
      return t;
    });
    console.log(todos);
  }

  static getAll(): Todo[] {
    console.log(todos);
    return todos;
  }
}
