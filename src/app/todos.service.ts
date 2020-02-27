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
}
