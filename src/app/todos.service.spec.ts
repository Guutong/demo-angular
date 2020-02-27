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

  it('id should be increase 1 from max id', () => {
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

    const result = service.generateId();
    expect(result).toBe(3);
  });

  it('id should be increase 1 from max id', () => {
    service.todos = [
      {
        id: 2,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
      {
        id: 3,
        title: 'Sleeping',
        description: 'i want to sleep',
        status: false
      }
    ];

    const result = service.generateId();
    expect(result).toBe(4);
  });

  it('id should be increase 1 from max id', () => {
    service.todos = [];
    const result = service.generateId();
    expect(result).toBe(1);
  });

  it('ควรจะ delete task by id', () => {
    service.todos = [
      {
        id: 2,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
      {
        id: 3,
        title: 'Sleeping',
        description: 'i want to sleep',
        status: false
      }
    ];

    service.deleteTaskById(2);

    expect(service.todos.length).toBe(1);
  });

  it('ควรจะ delete task by id', () => {
    service.todos = [
      {
        id: 2,
        title: 'Meeting',
        description: 'learning tdd',
        status: false
      },
      {
        id: 3,
        title: 'Sleeping',
        description: 'i want to sleep',
        status: false
      }
    ];

    service.deleteTaskById(2);
    service.deleteTaskById(3);

    expect(service.todos.length).toBe(0);
  });
});
