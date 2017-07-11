import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		const todos = [
			{

				title:"Learn JS",
				completed: true
			},
			{
				id:2,
				title:"Learn Angular",
				completed: false
			},
			{
				id:3,
				title:"Write App",
				completed: false
			}
		];

		return { todos };
	}
}

