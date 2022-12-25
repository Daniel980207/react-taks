import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-x1 font-bold capitalize">Título : {task.title}</h1>
      <p className="text-gray-500 text-5m">Descripción : {task.descripcion}</p>remote origin already exists.
      <button
        className="bg-red-500 px-2 p2-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tareas
      </button>
    </div>
  );
}
export default TaskCard;
