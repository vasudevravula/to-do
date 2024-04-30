import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent {
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: this.generateId(),
        title: this.newTodoTitle.trim(),
        completed: false
      };
      this.todoService.addTodo(newTodo);
      this.newTodoTitle = ''; // Clear input field
    }
  }

  private generateId(): number {
    // Generate a unique ID for the new to-do item (e.g., based on current timestamp)
    return new Date().getTime();
  }
}