import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import navLinks from "./navLinks";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        {/* Logo */}

        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Manish
        </NavLink>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <nav className="flex gap-8">

            {navLinks.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </nav>

          {/* Resume Button */}

          <a
            href="/Manish_final_resume.pdf"
            download
            className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-semibold
              px-5
              py-2
              rounded-xl
              transition
              shadow-lg
            "
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black border-t border-white/10 px-6 py-5 flex flex-col gap-5">

          {navLinks.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>

          ))}

          <a
            href="/Manish_final_resume.pdf"
            download
            className="
              bg-cyan-500
              text-black
              text-center
              py-3
              rounded-xl
              font-semibold
            "
          >
            Download Resume
          </a>

        </div>

      )}

    </header>
  );
}

export default Navbar;