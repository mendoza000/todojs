export class Task {

	static fromJSON({tarea, id}){
		let tempTask = new Task(tarea)
		tempTask.id = id
		/*tempTask.completado = completado
		tempTask.creado = creado*/
	};

	constructor(tarea){
		this.tarea = tarea;

		this.id    = new Date().getTime();
		this.completado = false;
		this.creado = new Date(); 
	}
}