import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex-1 bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
        <p className="text-8xl font-bold text-blue-500">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white shadow transition hover:bg-blue-600 active:scale-95"
          >
            Go home
          </Link>
          <Link
            to="/task"
            className="rounded-lg border border-blue-500 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 active:scale-95"
          >
            View tasks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
