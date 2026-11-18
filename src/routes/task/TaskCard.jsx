import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function TaskCard({ task, setTaskList }) {
  const [onEdit, setOnEdit] = useState(false);
  const [formInput, setFormInput] = useState();

  const deleteHandler = () => {
    const isConfirmed = confirm(`Are you sure you want to delete task`);

    if (!isConfirmed) {
      return;
    } else {
      setTaskList((prev) => prev.filter((tas) => tas.id !== task.id));
    }
  };

  const editTaskHander = (e) => {
    e.preventDefault();
    setTaskList((prev) =>
      prev.map((tas) =>
        tas.id === task.id ? { ...tas, title: formInput } : tas,
      ),
    );
    setOnEdit(false);
  };

  const taskCompletionHandler = () => {
    setTaskList((prev) =>
      prev.map((tas) =>
        tas.id === task.id ? { ...tas, completed: !tas.completed } : tas,
      ),
    );
  };
  return (
    <div
      className={`${task.completed ? "bg-gray-200" : "bg-white"} min-h-24 shadow-2xl rounded-lg grid grid-cols-[2rem_1fr_7rem_5rem] gap-4 items-center px-6 py-4`}
    >
      <div className="flex items-center justify-center">
        {task.completed ? (
          <input type="radio" defaultChecked />
        ) : (
          <input type="radio" onChange={() => taskCompletionHandler()} />
        )}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <h1
          className={`${task.completed && "line-through text-gray-400"} bold text-lg `}
        >
          {onEdit ? (
            <form
              className="flex items-center gap-3"
              onSubmit={(e) => editTaskHander(e)}
            >
              <input
                className="border border-black p-1 px-3 rounded-sm w-full min-w-0 flex-1"
                placeholder={task.title.slice(0, 30) + "..."}
                onChange={(e) => setFormInput(e.target.value)}
              />
              <button className="p-1 px-8 bg-sky-600 active:bg-sky-400 cursor-pointer rounded-sm">
                submit
              </button>
            </form>
          ) : (
            task.title
          )}
        </h1>

        <p className="text-sm text-gray-500 break-all">
          {task.createdAt.toLocaleString().slice(0, 10) + " "}
        </p>
      </div>

      <div
        className={`${task.completed ? "bg-green-400 " : "bg-yellow-400 "} text-xs font-medium px-3 py-1 rounded-full capitalize text-center`}
      >
        {task.completed ? "completed" : "pending"}
      </div>

      <div className="flex items-center">
        <div className="flex w-full justify-between items-center">
          <button
            className="cursor-pointer text-xl"
            onClick={() => setOnEdit((i) => !i)}
          >
            {!onEdit ? (
              <FaPencilAlt className="text-blue-500" />
            ) : (
              <MdCancel className="text-red-500 text-2xl" />
            )}
          </button>

          <button
            className="cursor-pointer text-xl"
            onClick={() => deleteHandler()}
          >
            <FaTrash className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
