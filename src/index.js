import './styles.css';
import { Task, TaskList, crearTaskHTML} from './classes/index';

/* Referencia al DOM */
const taskCount = document.querySelector('#todo_count');

/* Creamos la lista de tareas vacia */
export const list  = new TaskList()


list.todos.forEach(todo => {
	crearTaskHTML(todo)
	
})

