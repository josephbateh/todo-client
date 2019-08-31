import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListInputComponent} from './todo-list-input.component';

xdescribe('TodoListInputComponent', () => {
  let component: TodoListInputComponent;
  let fixture: ComponentFixture<TodoListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
