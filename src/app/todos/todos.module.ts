import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TodosComponent, AddTaskComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
