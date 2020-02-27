import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService, Task } from '../todos.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  taskForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl(false),
  });

  constructor(public service: TodosService) { }

  onSubmit() {
    if (this.taskForm.invalid) { return; }
    const task: Task = {
      id: this.service.generateId(),
      title: this.taskForm.controls.title.value,
      description: this.taskForm.controls.description.value,
      status: this.taskForm.controls.status.value,
    };
    this.service.add(task);
    this.taskForm.reset();
  }

}
