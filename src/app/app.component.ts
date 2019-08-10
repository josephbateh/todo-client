import {Component} from '@angular/core';
import {TodoItem} from './modules/todo/models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  items: TodoItem[] = [{
    id: '327d51c8-712b-42ca-b720-93e28c408cc3',
    description: 'You need to do this thing.',
    name: 'Todo',
    isComplete: false
  }];
}
