import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // LOAD THEME
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 dark:bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Shruti.dev
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 transition duration-300"
          >
            {darkMode ? "☀" : "🌙"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        } bg-slate-900 border-t border-white/10`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-200 font-medium">
          <li>
            <a
              href="Hero.jsx"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
