import TodoService from "./todo-service.js";



let todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawTodos)
}


function drawTodos(todos) {
	let template = ''
//	todos.forEach(todo => {
	
	//DONT FORGET TO LOOP
	for (let i=0; i< todos.length; i++) {
		const todo = todos[i];
	 		
		template += `
		
		<div id="todo-background" class="col-sm-8">
		<h4>To Do: ${todo.description}</h4>
		<input Type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${todo.id}')"></input>
		<button onclick="app.controllers.todoController.removeTodo('${todo.id}')">delete</button>
		</div>
		`
	}
	document.getElementById('todo').innerHTML = template
	document.getElementById('total').innerText = "Number of tasks: " + todos.length
	}


export default class TodoController {
	constructor() {
		todoService.getTodos(drawTodos)
		
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault(); 
		let form = e.target
	//	todoService.addTodo(formData,draw)
		let todo = {}

	
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo,getTodos)
	
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId,getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId,drawTodos)
	//	todoService.getTodos(drawTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	} 



}
