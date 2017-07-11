import { Component } from '@angular/core';
import { Todo } from './shared/Todo';


@Component({
	moduleId : module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent {
	title = 'Angular todo';
	
}