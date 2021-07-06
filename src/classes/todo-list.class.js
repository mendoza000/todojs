import { Task } from "./todo.class"
const taskCount = document.querySelector('#todo_count');


const countPendiente = (todo) => {
	let x = 0
	todo.forEach(function(elem) {
		if (elem.completado === false) {
			x += 1
		taskCount.innerText = x
		}
	});
}

export class TaskList {

	constructor() {
		this.cargarLocalStorage()
	}

	nuevoTask(todo){
		this.todos.push(todo)
		this.guardarLocalStorage()
		countPendiente(this.todos)
	}

	eliminarTask(id){
		this.todos = this.todos.filter(todo => todo.id != id)
		this.guardarLocalStorage()
		countPendiente(this.todos)
	}

	status(id){
		for(let todo of this.todos){
			if (todo.id == id) {
				todo.completado = !todo.completado
				this.guardarLocalStorage()
				break;
			}
		}
		countPendiente(this.todos)
	}

	eliminarCompletados(){
		this.todos = this.todos.filter(todo => !todo.completado)
		this.guardarLocalStorage()
	}

	guardarLocalStorage(){
		localStorage.setItem("todo", JSON.stringify(this.todos))
	}

	cargarLocalStorage(){

		this.todos = (localStorage.getItem("todo")) 
			? JSON.parse(localStorage.getItem("todo"))
			: []

		countPendiente(this.todos)

		/*this.todos = this.todos.map(obj => Task.fromJSON(obj));*/
	}

}