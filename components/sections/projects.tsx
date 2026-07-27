'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      title: "Hand Gesture Recognition",
      context: "Research project · SEAL Research Team",
      description: "Collaborated with the SEAL Research Team to develop a real-time hand gesture recognition system using Python and TensorFlow, achieving 95% accuracy in gesture classification. The system was used to control underwater robots in real-time, significantly reducing operational errors by 20% during field tests.",
      availability: "Research work — source code and demonstration are not publicly available.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Corporate Website Portfolio",
      context: "Client work · Freelance",
      description: "Designed and developed modern, responsive websites for multiple corporate clients including IAAS Senegal, BestBira Events, and Cabinet Audit 360. Implemented SEO best practices and optimized performance, resulting in increased online traffic and improved client satisfaction.",
      availability: "Client deliverables — repositories and administration access are private.",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "TypeScript", "Python", "Django"]
    },
    {
      title: "Safety QR Management Platform",
      context: "Private client platform · Eiffage Sénégal",
      description: "Built a comprehensive platform for Eiffage Sénégal's Safety Quality Environment Department featuring dynamic QR code generation for incident reporting. The system processes dozens of inspections monthly, improving real-time reporting and traceability of safety incidents.",
      availability: "Internal operational platform — access is restricted to the client.",
      technologies: ["React", "Node.js", "QR Code", "PostgreSQL", "Python", "Django"]
    }
  ]

  return (
    <motion.section
      id="projects"
      className="-mt-24 mb-28 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Selected Work</h2>
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
            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {project.context}
              </p>
              <h3 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                {project.title}
              </h3>
            </div>
            <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-muted-foreground">{project.description}</p>
            <p className="mb-5 max-w-[65ch] text-sm italic text-muted-foreground/80">
              {project.availability}
            </p>
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
