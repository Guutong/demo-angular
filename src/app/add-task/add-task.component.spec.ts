import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { FormGroup } from '@angular/forms';
import { TodosService } from '../todos.service';

describe('AddTaskComponent', () => {
  let service: TodosService;
  let component: AddTaskComponent;

  beforeEach(() => {
    service = new TodosService();
    component = new AddTaskComponent(service);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // taskForm
  // title required
  // description optional
  // status false

  it('ควรจะมี taskForm', () => {
    expect(component.taskForm instanceof FormGroup).toBe(true);
  });

  it('taskForm ควรจะมี field id, title, description, status', () => {
    expect(typeof component.taskForm.controls.id.value).toBe('number');
    expect(component.taskForm.controls.id.value).toBe(0);
    expect(component.taskForm.get('id').value).toBe(0);

    expect(component.taskForm.controls.title.value).toBe('');
    expect(component.taskForm.controls.title.invalid).toBe(true);
    expect(component.taskForm.controls.description.value).toBe('');
    expect(component.taskForm.controls.description.valid).toBe(true);
    expect(component.taskForm.controls.status.value).toBe(false);
  });

  it('ควรจะ valid เมื่อกรอกหัวข้อ "ประชุมกับ ผนง"', () => {
    component.taskForm.controls.title.setValue('ผนง');
    expect(component.taskForm.valid).toBe(true);
  });

  it('ควรจะ invalid เมื่อสัง่ reset', () => {
    component.taskForm.controls.title.setValue('ผนง');

    component.taskForm.reset();

    expect(component.taskForm.invalid).toBe(true);
    expect(component.taskForm.controls.title.value).toBe(null);
  });

  it('should be increase task in service when call onSubmit', () => {
    expect(component.service.todos.length).toBe(0);
    component.taskForm.controls.id.setValue(1);
    component.taskForm.controls.title.setValue('ผนง');

    component.onSubmit();

    expect(component.taskForm.controls.title.value).toBe(null);
    expect(component.service.todos.length).toBe(1);
    expect(component.service.todos[0].title).toBe('ผนง');
  });

  it('should be not increase task in service when call onSubmit', () => {
    expect(component.service.todos.length).toBe(0);

    component.taskForm.reset();
    component.onSubmit();
    console.log(component.service.todos);

    expect(component.service.todos.length).toBe(0);
  });
});
