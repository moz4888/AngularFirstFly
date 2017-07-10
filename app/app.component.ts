import { Component } from '@angular/core';

interface ITodo {
	title: string;
	completed: boolean;
}

class Todo implements ITodo {
	
	title: string;
	completed: boolean;
	
	constructor(title:string,completed:boolean) {
		this.title = title
		this.completed = completed
	}
}

const todos: ITodo[] = [
	{
		title:"Learn JS",
		completed: true
	},
	{
		title:"Learn Angular",
		completed: false
	},
	{
		title:"Write App",
		completed: false
	}
];

@Component({
	moduleId : module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent {
	title = 'Angular todo';
	todos: ITodo[] = todos;

	toggle(todo: ITodo) {
		todo.completed = !todo.completed;
	}

	delete(todo: ITodo) {
		let index = this.todos.indexOf(todo);

		if (index > -1) {
			this.todos.splice(index,1);
		}
	}

	create(event:Event,input: HTMLInputElement) {

		event.preventDefault();
		let todo: Todo = new Todo(input.value,false);
		this.todos.push(todo);

		input.value = "";
	}
}