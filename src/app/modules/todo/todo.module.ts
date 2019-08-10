import {NgModule} from '@angular/core';
import {TodoListItemComponent} from './components/todo-list-item/todo-list-item.component';
import {MatCardModule} from '@angular/material';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TodoListItemComponent, TodoListComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  providers: [],
  exports: [
    TodoListItemComponent,
    TodoListComponent
  ],
  bootstrap: []
})
export class TodoModule {
}
