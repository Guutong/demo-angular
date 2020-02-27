import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodosService } from '../todos.service';

describe('TodosComponent', () => {
  const service = new TodosService();
  let component: TodosComponent = new TodosComponent(service);

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ควรจะมีรายการ task แสดงเมื่อ service มี task', () => {
    component.service.todos = [
      {
        id: 1,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
      {
        id: 2,
        title: 'Sleeping',
        description: 'i want to sleep',
        status: false
      }
    ];

    component.ngOnInit();

    expect(component.todos instanceof Array).toBe(true);
    expect(component.todos.length).toBe(2);
  });

  it('เมื่อ call onDeleteTaskById(2) task 2 ควรจะหายไป', () => {
    component.service.todos = [
      {
        id: 2,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
    ];

    component.onDeleteTaskById(2);

    expect(component.todos.length).toBe(0);
  });

  it('เมื่อ call onDeleteTaskById(2) task 2 ควรจะหายไป', () => {
    component.service.todos = [
        {
        id: 1,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
      {
        id: 2,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
    ];

    component.onDeleteTaskById(2);

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].id).toBe(1);
  });
});
