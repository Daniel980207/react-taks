import { createContext } from "react";
import { useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContexProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(taskTitle, taskDescripcion) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        descripcion: taskDescripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
