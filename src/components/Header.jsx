import { Link } from "react-router";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-header border border-[#89705B] w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 relative">
        {/* LEFT - LOGO */}
        <div className="shrink-0">
          <img src="projectscoid.svg" alt="Logo" className="h-8" />
        </div>

        {/* CENTER - MENU (DESKTOP ONLY) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
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

        {/* RIGHT - BUTTONS (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-4 py-1.5 border border-[#89705B] bg-white rounded-full">
            Login
          </button>
          <button className="px-4 py-1.5 bg-[rgba(244,124,26,1)] text-white rounded-full">
            Register
          </button>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-[#89705B]"></span>
          <span className="w-6 h-0.5 bg-[#89705B]"></span>
          <span className="w-6 h-0.5 bg-[#89705B]"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-[#89705B] bg-header px-6 py-4">
          <ul className="flex flex-col gap-4 font-bold">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setOpen(false)}>
                Products
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <button className="w-full px-4 py-2 border border-[#89705B] bg-white rounded-full">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[rgba(244,124,26,1)] text-white rounded-full">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
