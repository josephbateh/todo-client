import {Injectable} from '@angular/core';
import {TodoItem} from '../models/todo-item';
import {TodoService} from './todo.service';

@Injectable()
export class TodoServiceMock extends TodoService {
  getAll() {
    return null;
  }

  getOne(id: string) {
    return null;
  }

  create(todo: TodoItem) {
    return null;
  }

  complete(todo: TodoItem) {
    return null;
  }

  delete(id: string) {
    return null;
  }
}
