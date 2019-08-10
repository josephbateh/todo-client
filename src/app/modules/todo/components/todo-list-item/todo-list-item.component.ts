import {Component, Input} from '@angular/core';
import {TodoItem} from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input()
  item: TodoItem;

  constructor() {
  }
}
