'use client'

import { motion } from 'framer-motion'
import { ArrowSquareOut } from '@phosphor-icons/react'

export function Experience() {
  const experiences = [
    {
      date: "FEB 2025 - PRESENT",
      title: "Software Engineer - Performance Analytics & Data Platforms",
      company: "BNP Paribas Asset Management",
      description: "Builds scalable analytics platforms and Python services for portfolio analytics and engineering workflows. Develops high-performance pipelines processing millions of financial records across 15+ data sources, while improving throughput, reliability, and release validation.",
      technologies: ["Python", "Pandas", "Polars", "NumPy", "AsyncIO", "PostgreSQL", "Redis"]
    },
    {
      date: "NOV 2022 - OCT 2024",
      title: "Software Engineer - Data & Performance Analytics",
      company: "SEGULA TECHNOLOGIE",
      description: "Designed analytics platforms for predictive maintenance, semantic search, and engineering applications. Built backend services and ETL pipelines processing millions of telemetry events, with performance monitoring, regression detection, and automated validation.",
      technologies: ["Python", "TypeScript", "React", "FastAPI", "Django", "Redis", "ETL"]
    },
    {
      date: "SEP 2022 - NOV 2022",
      title: "Software Engineer - Analytics Platform",
      company: "GAWL, Paris",
      description: "Built a real-time analytics platform for operational and application performance metrics. Developed ETL pipelines, interactive dashboards, monitoring, alerting, and data-quality controls while reducing dashboard response time by 45%.",
      technologies: ["Python", "Django", "Pandas", "PostgreSQL", "ETL", "Data Visualization"]
    },
    {
      date: "2020 - 2022",
      title: "Software Engineer",
      company: "Freelance",
      description: "Delivered custom backend systems, analytics platforms, APIs, and internal engineering tools for SMEs, from architecture and implementation through deployment, optimization, and long-term maintenance.",
      technologies: ["Python", "Django", "REST APIs", "Analytics", "Data Platforms"]
    },
    {
      date: "NOV 2017 - AUG 2019",
      title: "Software Engineer",
      company: "SEDIMA GROUP",
      description: "Developed internal applications for order management, inventory, payments, and operational workflows. Built reporting tools and automated business processes while improving reliability and maintainability.",
      technologies: ["Python", "Django", "PostgreSQL", "Reporting", "Automation"]
    },
    {
      date: "JUL 2017 - AUG 2017",
      title: "Backend Software Engineer",
      company: "Emc2 Group",
      description: "Developed backend services and internal web applications with Python and Django. Designed reusable components, REST APIs, and structured data models, supported by automated testing.",
      technologies: ["Python", "Django", "REST APIs", "Data Modeling", "Testing"]
    }
  ]

  return (
    <motion.section
      id="experience"
      className="-mt-24 mb-28 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Experience</h2>
      </div>
      <div>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group border-t border-border py-8 transition-colors hover:border-primary/40"
            whileHover={{ x: 4 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{experience.date}</p>
            <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              {experience.title} · {experience.company}
            </h3>
            <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-muted-foreground">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary hover:border-primary/60 hover:bg-primary/10 active:scale-[0.98]"
        >
          View Full Résumé
          <ArrowSquareOut className="ml-2 h-5 w-5" weight="regular" />
        </a>
      </div>
    </motion.section>
  )
}
