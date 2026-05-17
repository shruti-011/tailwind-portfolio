import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 dark:from-black dark:via-slate-950 dark:to-black">
      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          {/* BADGE */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-white/10 text-cyan-300 border border-cyan-400/20 backdrop-blur-md shadow-lg">
              ⚡ Open for Internship Opportunities
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
              Shruti
            </span>
          </h1>

          {/* TYPING ROLE */}
          <div className="mt-6 text-2xl sm:text-3xl font-semibold text-cyan-300">
            <TypeAnimation
              sequence={["Frontend Developer", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            I create modern, responsive, and user-friendly web applications
            using React, Tailwind CSS, Node.js, Express, and MongoDB. Passionate
            about clean UI, smooth UX, and building real-world projects.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-10">
            <a
              href="https://github.com/shruti-011"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-tirole-4744423b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-14">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 break-words">
                5+
              </h3>

              <p className="text-gray-400 text-sm mt-1 break-words">Projects</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 break-words">
                5+
              </h3>

              <p className="text-gray-400 text-sm mt-1 break-words">
                Technologies
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 break-words">
                100%
              </h3>

              <p className="text-gray-400 text-sm mt-1 break-words">
                Responsive
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* IMAGE GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 blur-3xl opacity-30 rounded-full"></div>

            {/* IMAGE BOX */}
            <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-2xl">
              <div className="bg-slate-950 rounded-3xl p-3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Developer"
                  className="w-full max-w-md rounded-2xl object-cover hover:scale-[1.02] transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL DOWN */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl animate-bounce">
        ↓
      </div>
    </section>
  );
}
