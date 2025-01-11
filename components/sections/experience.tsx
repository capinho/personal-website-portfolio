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
      company: "SEGULA TECHNOLOGIE",
      description: "Led the development of a scalable Web 3.0 marketplace using Next.js and microservices architecture on AWS. Built data scraping pipelines, integrated LLMs for automated classification, and implemented advanced semantic search algorithms.",
      technologies: ["Next.js", "AWS", "Python", "LLMs", "Microservices"]
    },
    {
      date: "2022",
      title: "Fullstack Software Engineer",
      company: "GAWL, Paris",
      description: "Developed an IPTV subscriber management system using Django and PostgreSQL. Created real-time dashboards with Pandas and AWS CloudWatch, maintained CI/CD pipeline for agile development.",
      technologies: ["Django", "PostgreSQL", "Pandas", "AWS CloudWatch", "CI/CD"]
    },
    {
      date: "2020 — 2022",
      title: "Freelance Developer",
      company: "Freelance",
      description: "Designed and developed websites for IAAS Senegal, BestBira Events, and Cabinet Audit 360. Built a Safety Quality Environment platform with QR code generation and developed the Eiffage website, improving user engagement by 10%.",
      technologies: ["Next.js", "React", "Node.js", "QR Code", "UX/UI"]
    },
    {
      date: "2017 — 2019",
      title: "Fullstack Engineer",
      company: "SEDIMA GROUP",
      description: "Built an internal e-commerce platform using Django and PostgreSQL for staff orders. Developed an incident management platform with automated workflows for streamlined reporting and resolution.",
      technologies: ["Django", "PostgreSQL", "Automation", "Workflow Management"]
    },
    {
      date: "2017",
      title: "Backend Software Engineer",
      company: "Emc2 Group",
      description: "Developed a Django-based platform for alumni engagement with user authentication. Provided comprehensive testing, documentation, and user training, ensuring high platform adoption.",
      technologies: ["Django", "Authentication", "Testing", "Documentation"]
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
