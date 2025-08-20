import { motion, useReducedMotion } from "framer-motion";
import BackgroundGrid from "./assets/BackgroundGrid";

export default function App() {
  const prefersReduced = useReducedMotion();
  const heroDur = prefersReduced ? 0 : 0.8;

  return (
    <div className="relative bg-black text-gray-100 font-sans scroll-smooth min-h-screen overflow-hidden">
      {/* Optional subtle lattice pattern behind everything */}
      <div className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [background-position:0_0]" />

      {/* Background Glow Grid */}
      <BackgroundGrid />

      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-gray-900 focus:text-white focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 py-4 border-b border-gray-800">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 text-xs md:text-sm uppercase tracking-widest">
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                >
                  {sec}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <main id="main" className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: heroDur }}
            className="text-6xl md:text-7xl font-extrabold mb-4 text-white"
          >
            Sunil Ahuja
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReduced ? 0 : 0.5, duration: heroDur }}
            className="text-lg md:text-xl text-gray-400"
          >
            Full Stack Developer · Backend Specialist
          </motion.p>
        </section>

        {/* About */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.6 }}
            className="text-3xl font-semibold mb-4 text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.8 }}
            className="text-gray-300 leading-relaxed"
          >
            Full Stack Developer (Backend Specialist) with 3.5+ years of
            experience designing and deploying scalable, high-performance web
            applications and distributed backend systems. Skilled in Node.js,
            NestJS, React.js, Next.js, AWS, Prisma ORM, WebRTC, and real-time
            pipelines.
          </motion.p>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReduced ? 0 : 0.6 }}
            className="text-3xl font-semibold mb-8 text-white text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "NestJS",
              "Tailwind CSS",
              "AWS",
              "Docker",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Redis",
              "WebRTC",
            ].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReduced ? 0 : 0.3 }}
                className="bg-gray-900/60 px-4 py-3 rounded-lg hover:bg-gray-900/100 transition-colors focus-within:ring-2 ring-white/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Experience
          </h2>
          <div className="space-y-12">
            <div className="rounded-xl border border-white/5 bg-gray-900/80 p-6">
              <h3 className="text-xl font-bold text-white">
                Centrelocus · Mar 2025 – Present
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Built SpeakPro AI, a real-time English learning platform with
                  AI transcription.
                </li>
                <li>
                  Implemented Jitsi-based video conferencing with Redis &
                  PostgreSQL.
                </li>
                <li>Developed transcription bots and AI roleplay sessions.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/5 bg-gray-900/80 p-6">
              <h3 className="text-xl font-bold text-white">
                Micro Technologies · Jan 2022 – Mar 2025
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>
                  Developed scalable full-stack apps using React, Next.js,
                  Node.js, AWS.
                </li>
                <li>
                  Implemented JWT authentication, optimized APIs (40% faster).
                </li>
                <li>
                  Automated CI/CD pipelines with GitHub Actions & Jenkins.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SpeakPro AI (English Learning App)",
                desc: "Real-time English learning platform with live grammar correction, tone analysis, roleplay sessions, and transcription bots using WebRTC, Jitsi, and AI integrations.",
                stack:
                  "React.js, Node.js, Jitsi, WebRTC, Redis, PostgreSQL, AWS, Whisper",
              },
              {
                title: "Swift Shopper (E-Commerce)",
                desc: "Scalable platform with JWT authentication & Razorpay integration.",
                stack: "React.js, Node.js, MySQL, AWS",
              },
              {
                title: "Real Estate App",
                desc: "Marketplace with Supabase Auth & role-based access.",
                stack: "Next.js, Supabase",
              },
              {
                title: "E-Learning Platform",
                desc: "Video hosting on AWS S3, payments with Razorpay.",
                stack: "React.js, Node.js, MongoDB, AWS",
              },
              {
                title: "Whiteboard App",
                desc: "Real-time collaborative whiteboard using WebSockets.",
                stack: "Next.js, WebSockets, TurboRepo",
              },
            ].map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReduced ? 0 : 0.5 }}
                className="p-6 bg-gray-900/60 rounded-xl border border-white/5 hover:bg-gray-900/100 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-2">{p.desc}</p>
                <p className="text-sm text-gray-300">{p.stack}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-20 bg-gray-950 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Contact</h2>
          <p className="text-gray-400 mb-6">
            Let’s connect! I’m open to opportunities and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <a
              href="mailto:sunilahuja1702@gmail.com"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded"
              aria-label="Email Sunil"
            >
              Email
            </a>
            <a
              href="tel:7999335461"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded"
              aria-label="Call Sunil at 7999335461"
            >
              Phone: 7999335461
            </a>
            <a
              href="https://linkedin.com/in/sunil-ahuja17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded"
              aria-label="Sunil on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SunilAhuja17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 rounded"
              aria-label="Sunil on GitHub"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
