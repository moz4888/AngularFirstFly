import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/Todo';
import { TodoService } from '../shared/todo.service';


@Component ({
	moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {

	todos: Todo[];

	constructor(private todoService: TodoService) {
		this.todos = [];
	}

	ngOnInit() {
		this.todoService.getTodos().then(todos => this.todos = todos);
	}
	
	delete(todo: Todo) {
		this.todoService.deleteTodo(todo);	
	}

	toogle(todo: Todo) {
		this.todoService.toggle(todo);
	}
}