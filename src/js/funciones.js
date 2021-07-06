/* Referencia al DOOM */
const divTaskList        = document.querySelector('.todo-list');
const txtTask            = document.querySelector('.new-todo');
const btnRemoveCompleted = document.querySelector('.clear-completed');
const filters            = document.querySelector('.filters');
const aFilter  			 = document.querySelectorAll('.filtro');

import { Task } from '../classes/index'
import { list } from '../index'

export const crearTaskHTML = (task) => {
	divTaskList.innerHTML += `
	<li class="${ (task.completado) ? "completed" : "" }" data-id="${task.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (task.completado) ? "checked" : ""}>
			<label>${task.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`

}

txtTask.addEventListener('keyup', (event) => {

	if (event.keyCode === 13 && txtTask.value.length > 0) {
		let tarea = new Task(txtTask.value);

		list.nuevoTask(tarea)
		crearTaskHTML(tarea)

		txtTask.value = ""



	}
	
});

divTaskList.addEventListener('click', (event) => {
	
	const elem     = event.target.localName;
	const elemLi   = event.target.parentElement.parentElement
	const elemId   = elemLi.getAttribute("data-id")

	if (elem.includes("input")) {
		list.status(elemId)
		elemLi.classList.toggle("completed")
	}

	if (elem.includes("button")) {
		list.eliminarTask(elemId)
		divTaskList.removeChild(elemLi)
	}

});

btnRemoveCompleted.addEventListener('click', (event) => {
	list.eliminarCompletados()

	for (let i = divTaskList.children.length - 1; i >= 0; i--) {

		const elem = divTaskList.children[i]
		
		if (elem.classList.contains("completed")) {
			divTaskList.removeChild(elem)
		}

	}
});

filters.addEventListener('click', function(event) {
	const filtro = event.target.text;

	if (!filtro) {return}

	aFilter.forEach(function(elem) {
		elem.classList.remove("selected")
	});

	event.target.classList.add("selected")

	for(const elem of divTaskList.children){
		elem.classList.remove("hidden")
		const completado = elem.classList.contains("completed")

		if (filtro === "Completados") {
			if (!completado) {elem.classList.add("hidden")}
		}
		if (filtro === "Pendientes") {
			if (completado) {elem.classList.add("hidden")}
		}
	}
});