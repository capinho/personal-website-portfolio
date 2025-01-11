'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.5 })

  const experiences = [
    {
      date: "2022 — PRESENT",
      title: "Software Engineer",
      company: "SEGULA TECHNOLOGIES",
      description: "Leading the development of Web 3.0 marketplaces and integrating cutting-edge AI technologies. Building robust systems on AWS and implementing advanced algorithms for data processing.",
      technologies: ["Python", "React", "AWS", "AI/ML"]
    },
    {
      date: "2020 — 2022",
      title: "Software Engineer",
      company: "Freelance",
      description: "Developed custom web applications and AI-powered solutions for various clients. Provided technical consulting and implemented scalable architectures.",
      technologies: ["Python", "Django", "React", "Node.js"]
    }
  ]

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="pt-24 -mt-24 mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-[#ccd6f6] mb-12">Experience</h2>
      <div className="space-y-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group hover:bg-[#111111] rounded-lg p-6"
            whileHover={{ x: 5 }}
          >
            <h3 className="text-3xl font-semibold text-[#ccd6f6] mb-2">
              {experience.title} · {experience.company}
            </h3>
            <p className="text-xl text-[#64ffda] mb-4">{experience.date}</p>
            <p className="text-xl text-[#8892b0] mb-6">{experience.description}</p>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-background/50 text-[#64ffda] border border-[#64ffda]/20 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
