import Todo from "../../models/Todo.js";


// I can add and delete todos to the API
// I cannot get the todo description to show up
// This makes all of my todos show up as undefined
// but they are showing up on my API
// I'm so confused



const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Tavia/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

let todoList = []

export default class TodoService {

	draw(todoId) {
		todoApi.drawTodo(todoId)
			.then(res => {
				this.draw(this.getTodos())
			})

	}

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get()
			.then((res) => {
				console.log(res.data)
				todoList = (res.data.data.map(rawTodo => {
					return new Todo(rawTodo)

				}))
				draw(todoList);
			})
			.catch(logError)
	}
	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR??? - Space for form?
		let newTodo = new Todo(
			{description: todo.description}
		)
		todoApi.post()
			.then(res => {
				todoList.push(newTodo)

				console.log(res.data)
			})


		getTodos()

		//	.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		let todo = todoList[todoId]
		if (todo.completed == !todo.completed) {
			return !todo.completed
		}

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				getTodos()
			})
			.catch(logError)
	}




	removeTodo(todoId, draw) {

		todoApi.delete(todoId)
			.then(res => {
				this.getTodos(draw)
			})
	}
}
