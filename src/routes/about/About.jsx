function About() {
  return (
    <>
      <div className="flex-1 bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-slate-900">About TodoApp</h1>

          <p className="mt-4 text-lg text-slate-600">
            TodoApp is a simple way to keep track of what you need to do. Add
            your tasks, check them off when they're done, and stay organized.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-slate-900">
            What you can do
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Add new tasks</li>
            <li>Mark tasks as done</li>
            <li>Edit or delete tasks</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
