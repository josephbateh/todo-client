import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoItem} from '../models/todo-item';

@Injectable()
export class TodoService {
  constructor(private readonly http: HttpClient) {
  }

  getAll() {
    return this.http.get('https://localhost:5001/api/todos');
  }

  getOne(id: string) {
    return this.http.get(`https://localhost:5001/api/todos/${id}`);
  }

  create(todo: TodoItem) {
    return this.http.post('https://localhost:5001/api/todos', {
      ...todo
    });
  }

  complete(todo: TodoItem) {
    return this.http.put('https://localhost:5001/api/todos', {
      ...todo,
      isComplete: !todo.isComplete,
    });
  }

  delete(id: string) {
    return this.http.delete(`https://localhost:5001/api/todos/${id}`);
  }
}
