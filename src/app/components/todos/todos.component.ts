import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  loading: boolean = false
  todos: Todo[]
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loading = true
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo
      this.loading = false
    })
    
  }
  deleteTodo = (todo:Todo) => {
    this.loading = true
    this.todos = this.todos.filter(data => data.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe(todo => {
      this.loading = false
    })
  }
  addTodo = (todo:Todo) => {
    this.loading = true
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
      this.loading = false
    })
  }
}
