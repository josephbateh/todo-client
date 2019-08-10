import {Component, Input} from '@angular/core';
import {TodoItem} from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input()
  items: TodoItem[];

  constructor() {
  }
}
