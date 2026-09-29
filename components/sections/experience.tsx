'use client'

import { motion } from 'framer-motion'
import { ArrowSquareOut } from '@phosphor-icons/react'

export function Experience() {
  const experiences = [
    {
      date: "FEB 2025 - PRESENT",
      title: "Data / Software Engineer",
      company: "BNP Paribas Asset Management",
      description: "Designs Python backend services and reusable data components for investment analytics and automated reporting. Builds asynchronous ingestion workflows across internal and external sources, consolidates portfolio, performance, risk, benchmark, and product datasets, and improves reliability through caching, monitoring, retries, and data-quality controls.",
      technologies: ["Python", "Pandas", "NumPy", "Polars", "AsyncIO", "Kubernetes", "Redis", "PostgreSQL"]
    },
    {
      date: "NOV 2022 - OCT 2024",
      title: "Software / Data Engineer",
      company: "SEGULA TECHNOLOGIE",
      description: "Built Python microservices, APIs, data-modeling frameworks, and analytics backends for predictive-maintenance, Web3, and R&D platforms. Developed scraping and ingestion pipelines, asynchronous processing, semantic-search and LLM-based components, plus internal research and visualization tools.",
      technologies: ["Python", "Django", "FastAPI", "Selenium", "BeautifulSoup", "Redis", "LLMs"]
    },
    {
      date: "SEP 2022 - NOV 2022",
      title: "Fullstack / Data Engineer",
      company: "GAWL, Paris",
      description: "Built a Python and Django analytics platform backed by PostgreSQL. Designed ETL and aggregation pipelines for high-volume operational data, improved backend performance through SQL optimization and caching, and implemented validation, monitoring, and alerting.",
      technologies: ["Python", "Django", "PostgreSQL", "ETL", "SQL", "Monitoring"]
    },
    {
      date: "2019 - 2022",
      title: "Freelance Developer",
      company: "Freelance",
      description: "Designed and delivered Python backend applications, internal tools, and automation systems for SMEs. Managed projects end-to-end from requirements and architecture through deployment, maintenance, and performance improvements.",
      technologies: ["Python", "Backend Systems", "Automation", "Architecture", "Deployment"]
    },
    {
      date: "NOV 2017 - AUG 2018",
      title: "Fullstack Engineer",
      company: "SEDIMA GROUP",
      description: "Built internal platforms and structured data workflows for order, payment, and inventory management. Developed data-driven applications with automation and reporting features to improve internal processes.",
      technologies: ["Data Workflows", "Automation", "Reporting", "Internal Platforms"]
    },
    {
      date: "JUL 2017 - AUG 2017",
      title: "Backend Software Engineer",
      company: "Emc2 Group",
      description: "Developed backend features for an internal alumni platform using Python and Django. Designed relational data models, user-management workflows, and administrative features, and contributed to testing, debugging, and maintenance.",
      technologies: ["Python", "Django", "Relational Data Modeling", "Testing", "Debugging"]
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
