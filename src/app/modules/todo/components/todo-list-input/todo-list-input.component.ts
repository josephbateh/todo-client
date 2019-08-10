import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-input',
  templateUrl: './todo-list-input.component.html',
  styleUrls: ['./todo-list-input.component.css']
})
export class TodoListInputComponent {
  name: string;
  description: string;

  constructor(private readonly todoService: TodoService) {
    this.name = 'Todo';
    this.description = 'Description';
  }

  submit() {
    this.todoService.create({
      name: this.name,
      description: this.description,
      isComplete: false
    }).subscribe();
  }
}
