import { useContext } from "react";
import TaskCard from "../components/TaskCard"
import { TaskContext } from "../context/TaskContext";


function TaskList() {
  const {tasks}=useContext(TaskContext)
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas disponibles...</h1>;
  }
  return (
    <div className="grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {tasks.map((task) =>(
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
