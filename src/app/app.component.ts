import {Component, OnInit} from '@angular/core';
import {TodoService} from './modules/todo/services/todo.service';
import {TodoItem} from './modules/todo/models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo App';
  items: TodoItem[];

  constructor(private readonly todoService: TodoService) {

  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoService.getAll().subscribe((data: TodoItem[]) => {
      this.items = [];
      for (const item of data) {
        this.items = this.items.concat(item);
      }
    });
  }
}
