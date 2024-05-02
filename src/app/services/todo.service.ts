import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  // What Subject is appropriate here?
  private todosSubject: Subject<Todo[]> = new Subject<Todo[]>;

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  // Implement other CRUD operations as needed
  addTodo(todo: Todo): void {
    
  }

  deleteTodo(id: number): void {
    
  }

  updateTodo(todo: Todo): void {
    
  }
}