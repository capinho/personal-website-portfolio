'use client'

import { Github, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.5 })

  const projects = [
    {
      title: "Hand Gesture Recognition",
      description: "Collaborated with the SEAL Research Team to develop a real-time hand gesture recognition system using Python and TensorFlow, achieving 95% accuracy in gesture classification. The system was used to control underwater robots in real-time, significantly reducing operational errors by 20% during field tests.",
      github: "https://github.com/yourusername/project1",
      link: "https://project1.com",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Corporate Website Portfolio",
      description: "Designed and developed modern, responsive websites for multiple corporate clients including IAAS Senegal, BestBira Events, and Cabinet Audit 360. Implemented SEO best practices and optimized performance, resulting in increased online traffic and improved client satisfaction.",
      github: "https://github.com/yourusername/corporate-portfolio",
      link: "https://example.com/portfolio",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "TypeScript", "Python", "Django"]
    },
    {
      title: "Safety QR Management Platform",
      description: "Built a comprehensive platform for Eiffage Sénégal's Safety Quality Environment Department featuring dynamic QR code generation for incident reporting. The system processes dozens of inspections monthly, improving real-time reporting and traceability of safety incidents.",
      github: "https://github.com/yourusername/safety-qr",
      link: "https://example.com/safety-qr",
      technologies: ["React", "Node.js", "QR Code", "PostgreSQL", "Python", "Django"]
    }
  ]

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="-mt-24 mb-28 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Projects</h2>
      </div>
      <div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group border-t border-border py-8 transition-colors hover:border-primary/40"
            whileHover={{ x: 4 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                {project.title}
              </h3>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
                  aria-label={`View ${project.title} source code`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-full border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
