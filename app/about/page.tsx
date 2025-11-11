"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold tracking-tight md:text-5xl"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 max-w-prose text-base text-muted md:text-lg"
      >
        I’m a Computer Science student passionate about building scalable,
        data-driven products that combine creativity and technology.  
        I enjoy designing user-friendly interfaces, learning new frameworks,
        and solving challenging software problems that make a real impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">Background</h2>
          <p className="text-sm text-muted">
            Currently studying Computer Science at the University of Central Florida.  
            I’m focused on software engineering, web technologies, and
            exploring intersections of finance and technology.
          </p>
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">Interests</h2>
          <p className="text-sm text-muted">
            In my free time, I love participating in hackathons, experimenting with AI tools,  
            contributing to open-source, and refining my front-end and algorithm skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
