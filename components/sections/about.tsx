'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.section
      id="about"
      className="-mt-24 mb-28 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">About</h2>
      </div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I’m a Python software engineer based in Paris, building scalable data systems, backend services, and research-oriented platforms for production environments.
        </motion.p>
        <motion.p 
          className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          My work focuses on performance, reliability, and large-scale data processing. I develop tools and frameworks used by analytics and research teams, with expertise across:
        </motion.p>
        <motion.ul 
          className="grid list-none gap-x-8 gap-y-4 py-2 text-base leading-relaxed text-muted-foreground sm:grid-cols-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.li className="border-l-2 border-primary/35 pl-4">Python with FastAPI and Django, plus JavaScript and TypeScript with Node.js and React</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Large-scale data processing with Pandas, NumPy, Polars, AsyncIO, and ETL pipelines</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Performance profiling, vectorized processing, memory optimization, and automated data classification</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">AWS, Kubernetes, Docker, Helm, Redis, PostgreSQL, and distributed systems</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Testing with pytest and TDD, monitoring, code reviews, and GitLab CI/CD</motion.li>
        </motion.ul>
        <motion.p 
          className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I turn complex datasets and research workflows into reusable APIs, dependable data pipelines, and maintainable software that teams can operate with confidence.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
