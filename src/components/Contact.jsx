import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm backdrop-blur-md shadow-lg">
            🟢 Available for Opportunities
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black text-white leading-tight">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
              Amazing
            </span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            I’m open for internships, freelance projects, collaborations, and
            exciting opportunities where I can create modern and impactful web
            experiences.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* CONTACT CARDS */}

            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 hover:bg-white/10 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">Email Me</h3>

                <p className="text-gray-300 mt-1">tiroleshruti@gmail.com</p>
              </div>
            </div>

            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-400/40 hover:bg-white/10 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center text-green-300 text-xl">
                <FaWhatsapp />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">WhatsApp</h3>

                <p className="text-gray-300 mt-1">+91 6268402814</p>
              </div>
            </div>

            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-400/40 hover:bg-white/10 transition duration-300">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center text-red-300 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">Location</h3>

                <p className="text-gray-300 mt-1">India</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-6">
              <h3 className="text-white font-semibold mb-5 text-lg">
                Connect With Me
              </h3>

              <div className="flex gap-5">
                <a
                  href="https://github.com/shruti-011"
                  target="_blank"
                  className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-cyan-500 hover:scale-110 transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/shruti-tirole-4744423b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-blue-500 hover:scale-110 transition duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">
            {/* FORM GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 blur-3xl opacity-20 rounded-3xl"></div>

            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Me a Message
              </h3>

              <p className="text-gray-300 mb-8">
                Have a project idea or opportunity? Let’s connect.
              </p>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message Sent Successfully!");
                  e.target.reset();
                }}
              >
                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-xl hover:scale-[1.02] transition duration-300"
                >
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 transition" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
