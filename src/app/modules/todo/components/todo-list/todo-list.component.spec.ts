import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListComponent} from './todo-list.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';
import {TodoListInputComponent} from '../todo-list-input/todo-list-input.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TodoService} from '../../services/todo.service';
import {TodoServiceMock} from '../../services/todo.service.mock';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent, TodoListComponent, TodoListInputComponent],
      imports: [MatCardModule,
        CommonModule,
        MatInputModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        NoopAnimationsModule],
      providers: [{provide: TodoService, useClass: TodoServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
