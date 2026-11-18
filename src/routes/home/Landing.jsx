function Landing() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl ">
            Welcome to TodoApp
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Keep track of your tasks in one place. Add them, finish them, and
            stay organized.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/task"
              className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600"
            >
              Get started
            </a>

            <a
              href="/about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
