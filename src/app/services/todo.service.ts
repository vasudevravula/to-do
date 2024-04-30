import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todosSubject.next([...this.todos]);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next([...this.todos]);
  }

  updateTodo(todo: Todo): void {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...todo };
      this.todosSubject.next([...this.todos]);
    }
  }

  // Implement other CRUD operations as needed
}