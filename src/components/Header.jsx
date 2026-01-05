import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-header border border-[#89705B] w-full">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 relative">
        {/* LEFT - LOGO */}
        <div className="shrink-0 font-bold text-xl">
          <img src="projectscoid.svg" />
        </div>

        {/* CENTER - MENU */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8 text-base font-bold">
            <li className="roboto">
              <Link to="/">Home</Link>
            </li>
            <li className="roboto">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="roboto">
              <Link to="/services">Services</Link>
            </li>
            <li className="roboto">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT - AUTH BUTTONS */}
        <div className="ml-auto flex items-center gap-4">
          <button className="px-4 py-1.5 border border-[#89705B] bg-white rounded-full">
            Login
          </button>
          <button className="px-4 py-1.5 bg-[rgba(244,124,26,1)] text-white rounded-full">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
