import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm backdrop-blur-md shadow-lg">
            ✨ Get To Know Me
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
              Me
            </span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            I’m a passionate MERN Stack Developer focused on creating modern,
            responsive, and user-friendly web applications while improving my
            frontend and backend development skills.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-20 items-start">
          {/* LEFT SIDE */}
          <div className="relative">
            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 blur-3xl opacity-20 rounded-3xl"></div>

            {/* CARD */}
            <div className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-5">Who I Am</h3>

              <p className="text-gray-300 leading-relaxed">
                I enjoy building clean and interactive web applications using
                modern technologies like React, Node.js, Tailwind CSS, and
                JavaScript. My focus is on creating responsive designs, smooth
                user experiences, and real-world projects.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="text-2xl font-bold text-cyan-300">10+</h4>

                  <p className="text-gray-400 text-sm mt-1">Projects</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="text-2xl font-bold text-cyan-300">5+</h4>

                  <p className="text-gray-400 text-sm mt-1">Skills</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="text-2xl font-bold text-cyan-300">100%</h4>

                  <p className="text-gray-400 text-sm mt-1">Responsive</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>

            {/* TECH GRID */}
            <div className="grid grid-cols-2 gap-5">
              {/* React */}
              <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
                <FaReact className="text-5xl text-cyan-300 group-hover:rotate-180 transition duration-500" />

                <p className="mt-4 text-white font-medium">React</p>
              </div>

              {/* Node */}
              <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
                <FaNodeJs className="text-5xl text-green-400" />

                <p className="mt-4 text-white font-medium">Node.js</p>
              </div>

              {/* Tailwind */}
              <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
                <SiTailwindcss className="text-5xl text-cyan-400" />

                <p className="mt-4 text-white font-medium">Tailwind CSS</p>
              </div>

              {/* JavaScript */}
              <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
                <FaJs className="text-5xl text-yellow-300" />

                <p className="mt-4 text-white font-medium">JavaScript</p>
              </div>
            </div>

            {/* EXTRA SKILLS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm">
                Responsive Design
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm">
                Git & GitHub
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm">
                REST APIs
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm">
                UI/UX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
