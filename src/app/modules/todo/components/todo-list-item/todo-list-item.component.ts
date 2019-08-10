import {Component, Input} from '@angular/core';
import {TodoItem} from '../../models/todo-item';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input()
  item: TodoItem;

  constructor(private readonly todoService: TodoService) {
  }

  delete() {
    this.todoService.delete(this.item.id).subscribe();
  }
}
