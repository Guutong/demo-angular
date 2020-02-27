import { Component, OnInit } from '@angular/core';
import { TodosService, Task } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Task[] = [];

  constructor(public service: TodosService) {
  }

  ngOnInit() {
    this.todos = this.service.getAllTask();
  }


}
