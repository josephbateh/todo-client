import {NgModule} from '@angular/core';
import {TodoListItemComponent} from './components/todo-list-item/todo-list-item.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule} from '@angular/material';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {CommonModule} from '@angular/common';
import {TodoListInputComponent} from './components/todo-list-input/todo-list-input.component';
import {TodoService} from './services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TodoListItemComponent, TodoListComponent, TodoListInputComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  exports: [
    TodoListItemComponent,
    TodoListComponent
  ],
  bootstrap: []
})
export class TodoModule {
}
