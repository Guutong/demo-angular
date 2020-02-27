import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Task[] = [];

  constructor() { }

  add(task: Task) {
    this.todos.push(task);
  }

  getAllTask(): Task[] {
    return this.todos;
  }

  generateId() {
    if (this.todos.length === 0) { return 1; }
    const id = Math.max(...this.todos.map(t => t.id));
    return id + 1;
  }

  deleteTaskById(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
