'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.5 })

  return (
    <motion.section
      ref={ref}
      id="about"
      className="pt-24 -mt-24 mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-[#ccd6f6] mb-12">About</h2>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="text-xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Hello! I'm a software engineer based in Paris, France, with a strong foundation in computer science and a passion for building innovative solutions.
        </motion.p>
        <motion.p 
          className="text-xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I specialize in developing robust backend systems, scalable web applications, and data engineering solutions. My expertise includes:
        </motion.p>
        <motion.ul 
          className="list-disc list-inside space-y-4 text-xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6 ml-4"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.li>Full-stack development with Python (Django, FastAPI) and React/Next.js</motion.li>
          <motion.li>Cloud infrastructure and DevOps on AWS</motion.li>
          <motion.li>Machine Learning and AI applications</motion.li>
          <motion.li>Database design and optimization (PostgreSQL, MongoDB)</motion.li>
          <motion.li>Data Engineering: Building scalable data pipelines, web scraping solutions, and automated ETL workflows</motion.li>
        </motion.ul>
        <motion.p 
          className="text-xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I'm particularly passionate about data engineering and AI applications. I enjoy architecting end-to-end data solutions, from building efficient web scrapers and data pipelines to implementing automated workflows that transform raw data into actionable insights.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
