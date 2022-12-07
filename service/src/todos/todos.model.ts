import { v4 as uuid } from "uuid";

const todos: Todo[] = [];

export default class Todo {
  public readonly id: string;
  public readonly title: string;
  public readonly done: boolean;

  constructor(title: string, done: boolean = false) {
    this.id = uuid();
    this.title = title;
    this.done = done;
  }

  save() {
    todos.push(this);
  }

  static delete(id: string) {
    todos.splice(
      todos.findIndex((t) => t.id === id),
      1
    );
  }

  static update(id: string, todo: Todo) {
    todos.map((t) => {
      if (t.id === id) return { ...todo, id: t.id };
    });
  }

  static getAll(): Todo[] {
    return todos;
  }
}
