import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import { useEffect } from "react";

function Task() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("task");

    return JSON.parse(storedTasks) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <section className="bg-gray-300 min-h-[calc(100vh-10rem)]">
      <div className="px-20 py-10 flex flex-col gap-4">
        <AddTaskForm taskList={taskList} setTaskList={setTaskList} />
        {taskList.length === 0 ? (
          <div className="h-[calc(100vh-20rem )] w-full flex justify-center items-center">
            <p>All caught up! Time to relax or add a new task.</p>
          </div>
        ) : (
          taskList.map((item, index) => (
            <TaskCard key={index} task={item} setTaskList={setTaskList} />
          ))
        )}
      </div>
    </section>
  );
}

export default Task;
