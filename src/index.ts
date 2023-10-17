type Task = {
  id: number;
  title: string;
  completed: boolean;
}

type TaskList = Task[];

const addTask = (taskList: TaskList, task: Task): TaskList => {
    return [...taskList, task]
}

const completeTask = (taskList: TaskList, taskId: number): TaskList => {
  return taskList.map((task: Task) => {
    return task.id == taskId ? {...task, completed: true} : task
  })
}

const filterTasks = (taskList: TaskList, filter: string): TaskList => {
  if (filter === "completed") {
    return taskList.filter((task) => task.completed);
  } else if (filter === "notCompleted") {
    return taskList.filter((task) => !task.completed);
  } else {
    return taskList;
  }
}

const printTaskList = (taskList: TaskList) => {
  return taskList.forEach((task: Task) => {
    return console.log(`title: ${task.title} completed: ${task.completed}`)
  })
}

const runApp = () => {
  let tasks = [
    { id: 1, title: 'Completar taller de TypeScript', completed: false },
    { id: 2, title: 'Estudiar programación funcional', completed: false },
    { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
    { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
    { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
    { id: 6, title: 'Hacer ejercicio', completed: true },
    { id: 7, title: 'Comprar víveres', completed: false },
    { id: 8, title: 'Llamar al médico', completed: false },
    { id: 9, title: 'Limpiar la casa', completed: true },
    { id: 10, title: 'Actualizar el CV', completed: false }
  ];

  const task11: Task = {id: 11, title: 'Completar Readme del proyecto', completed: true}
  const task12: Task = {id: 12, title: 'Completar retos pendientes', completed: false}

  tasks = addTask(tasks, task11)
  tasks = addTask(tasks, task12)

  tasks = completeTask(tasks, 10)

  const completedTasks = filterTasks(tasks, "completed")

  printTaskList(completedTasks)
}

runApp()