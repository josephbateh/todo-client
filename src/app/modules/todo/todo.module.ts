import {NgModule} from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [],
  providers: [],
  exports: [
    TodoItemComponent
  ],
  bootstrap: []
})
export class TodoModule {
}
