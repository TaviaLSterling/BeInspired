
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Tavia/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

//import Todo from "../../models/Todo.js"

let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { 
				console.log(res.data.data)
			todoList =(res.data.data) // <-- WHY IS THIS IMPORTANT????
			draw(todoList)
					
	})
			.catch(logError)
	}

	addTodo(todo,getTodos) {
		// WHAT IS THIS FOR??? - Space for form?

		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
			todoList.push(res)
			getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		let todo = todoList.find(todoElem => todoElem.id) ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId)
		.then(function(res){
			draw(res)
		} 
			
		)}
	

	removeTodo(todoId,draw) {
		// Umm this one is on you to write.... The method is a DELETE
todoApi.delete(todoId)
.then(res => {
	this.getTodos(draw)
})
	}

}