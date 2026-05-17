import { projects } from "../data/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm backdrop-blur-md shadow-lg">
            My Recent Work
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of the projects I’ve worked on using modern
            technologies like React, Tailwind CSS, Node.js, and MongoDB.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition duration-500"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-300 leading-relaxed text-sm">
                  {p.description}
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex gap-4">
                  {/* LIVE BUTTON */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition" />
                  </a>

                  {/* CODE BUTTON */}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-white/20 hover:scale-105 transition duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
