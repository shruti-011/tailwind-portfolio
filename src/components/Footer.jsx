import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] dark:bg-[#050b1a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Shruti.dev</h2>

          <p className="text-sm text-gray-300 mt-1">
            © {new Date().getFullYear()} Shruti Tirole. All rights reserved.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-cyan-300 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-300 transition">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-300 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-300 transition">
            Contact
          </a>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="flex gap-3">
          <a
            href="https://github.com/shruti-011"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="www.linkedin.com/in/shruti-tirole-4744423b6"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
