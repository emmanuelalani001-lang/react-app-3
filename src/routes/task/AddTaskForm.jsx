import { useState } from "react";

function AddTaskForm({ taskList, setTaskList }) {
  const MAX_INPUT_LENGTH = 150;

  const [formInput, setFormInput] = useState("");

  const submitsHandler = (e) => {
    e.preventDefault();
    if (!formInput.trim()) return;
    const newTask = {
      id: taskList.length + 1,
      title: formInput,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTaskList((prev) => [...prev, newTask]);
    setFormInput("");
  };
  const deleteHandler = () => {
    setTaskList((prev) => prev.filter((t) => t.id !== task.id));
  };
  return (
    <>
      <form
        className="bg-white rounded-lg p-5 shadow-2xl"
        onSubmit={(e) => submitsHandler(e)}
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-11 flex items-center border border-black px-5 gap-3">
            <span className="font-bold text-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <input
              className="w-full focus:ring-0 focus:outline-0"
              type="text"
              placeholder="Enter task....."
              value={formInput}
              onChange={(e) => setFormInput(e.target.value)}
              maxLength={MAX_INPUT_LENGTH}
            />
          </div>

          <button className="p-2 px-8 bg-sky-600 active:bg-sky-400 cursor-pointer rounded-sm">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTaskForm;
