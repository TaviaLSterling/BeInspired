import TodoService from "./todo-service.js";



let todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}


function draw(todos) {
	let template = ''
	todos.forEach(todo => {

	
	//DONT FORGET TO LOOP
//	for (let i=0; i< todos.length; i++) {
//		const todo = todos[i];
		if(todo.completed == false) {		
		template += `
		<div>
		<p>To Do: ${todo.description}</p>
		<input Type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo.id}')"></input>
		<button onclick="app.controllers.todoController.removeTodo('${todo.id}')">delete</button>
		</div>
		`
	} else if(todo.completed) {
		template += `
		<p>${todo.description}</p>
		<input Type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo.id}')" checked></input>
		<button onclick="app.controllers.todoController.removeTodo('${todo.id}')">delete</button>
		`
	}
	template += `
	<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
	<input type="text" name="to-do" placeholder="What to do?">
	<button type="submit">Submit</button>
	</form>
	`
	document.getElementById('todo').innerHTML = template
	})


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		let formData = e.target
		todoService.addTodo(formData,draw)
		let todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: formData.todo.value
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, draw)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}