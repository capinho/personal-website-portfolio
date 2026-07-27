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
          I’m a software engineer based in Paris, specializing in performance analytics, data platforms, and backend engineering.
        </motion.p>
        <motion.p 
          className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I build production software that helps engineering teams measure application performance, identify regressions, and make data-driven decisions. My expertise includes:
        </motion.p>
        <motion.ul 
          className="grid list-none gap-x-8 gap-y-4 py-2 text-base leading-relaxed text-muted-foreground sm:grid-cols-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.li className="border-l-2 border-primary/35 pl-4">Performance monitoring, benchmarking, experimentation, and root cause analysis</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Backend engineering with Python, FastAPI, Django, REST APIs, and AsyncIO</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Large-scale data processing with Pandas, Polars, NumPy, and SQL</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">ETL pipelines, data modeling, validation, quality, and visualization</motion.li>
          <motion.li className="border-l-2 border-primary/35 pl-4">Production infrastructure with AWS, Docker, Kubernetes, PostgreSQL, Redis, and CI/CD</motion.li>
        </motion.ul>
        <motion.p 
          className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I enjoy turning complex financial and engineering telemetry into reliable platforms, reusable APIs, and operational insights. My work combines software engineering, statistical analysis, observability, and performance optimization.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
