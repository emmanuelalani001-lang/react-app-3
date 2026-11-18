import { useState } from "react";
import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/task", label: "Task" },
];

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="px-6 md:px-20 h-16 bg-blue-400 w-full text-white relative">
      <div className="items-center flex justify-between h-full">
        <h1 className="text-xl font-bold">Todo app</h1>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none flex flex-col gap-1.5"
          onClick={() => setIsNavOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isNavOpen}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {isNavOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-blue-400 flex flex-col gap-4 px-6 py-4 z-10">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} onClick={() => setIsNavOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
