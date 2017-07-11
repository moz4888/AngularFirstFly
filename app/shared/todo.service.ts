import { Injectable} from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from '../shared/Todo';

@Injectable()
export class TodoService {
	
	private apiUrl: string = 'api/todos';
	
	todos: Todo[] = [];

	constructor(private http: Http) {}

	getTodos(): Promise<Todo[]> {
		return this.http.get(this.apiUrl)
		.toPromise()
		.then(res => res.json().data)
		.then(todos => this.todos = todos)
		.catch(this.handleError);
	}

	createTodo(title: string) {
		let headers = new Headers({'Content-Type':'application/json'});
		let opt = new RequestOptions({headers});
		
		const todo = new Todo(title,false);
		
		this.http.post(this.apiUrl, todo, opt)
		.toPromise()
		.then(res => res.json().data)
		.then(todos => this.todos.push(todo))
		.catch(this.handleError);
	}

	deleteTodo(todo: Todo) {
		let headers = new Headers({'Content-Type':'application/json'});
		let opt = new RequestOptions({headers});
		let url = `${this.apiUrl}/${todo.id}`;
		

		this.http.delete(url,opt).toPromise()
		.then(res => {
			let index = this.todos.indexOf(todo);

			if (index > -1) {
				this.todos.splice(index,1);
			}
		})
		.catch(this.handleError);
	}

	toggle(todo: Todo) {
		console.log('fffs');
		let headers = new Headers({'Content-Type':'application/json'});
		let opt = new RequestOptions({headers});
		let url = `${this.apiUrl}/${todo.id}`;

		this.http.put(url,todo,opt).toPromise()
		.then(res => {
			todo.completed = !todo.completed;
		})
		.catch(this.handleError);
		
	}

	private handleError(error: any) {
		console.error(error);
		return Promise.reject(error.message || error);
	}
}