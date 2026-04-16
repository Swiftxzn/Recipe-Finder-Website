import { Link } from "react-router";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-[var(--fundo-color)] shadow text-[var(--primary-color)] border-b-1 border-gray-300">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-8 w-50" />
      </Link>

      <ul className="flex gap-5 font-medium text-[var(--primary-color)]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
      <div className="w-50 flex justify-end">
        <a
          href="/recipes"
          className="bg-[var(--primary-color)] text-white rounded-xl px-4 py-2"
        >
          Browse recipes
        </a>
      </div>
    </header>
  );
}
