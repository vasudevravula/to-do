import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> = new Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
