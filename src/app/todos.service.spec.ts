import { TestBed } from '@angular/core/testing';

import { TodosService, Task } from './todos.service';

describe('TodosService', () => {
  let service = new TodosService();

  it('should be create', () => {
    expect(service).toBeTruthy();
  });

  it('should todos is array', () => {
    expect(service.todos instanceof Array).toBe(true);
  });

  it('ควรจะเพิ่ม task ได้', () => {
    const task: Task = {
      id: 1,
      title: 'Meeting',
      description: 'learning tdd',
      status: false
    };

    service.add(task);

    expect(service.todos.length).toBe(1);
  });

  it('ควรจะรายการของ task ทั้งหมด', () => {
    service.todos = [
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

    const result = service.getAllTask();

    expect(result.length).toBe(2);
    expect(result[0].title).toBe('Meeting');
    expect(result[1].title).toBe('Sleeping');
  });
});
