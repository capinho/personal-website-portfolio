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
      className="pt-24 -mt-24 mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-[#ccd6f6] mb-12">Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group hover:bg-[#111111] rounded-lg p-6"
            whileHover={{ x: 5 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-semibold text-[#ccd6f6]">
                {project.title}
              </h3>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p className="text-xl text-[#8892b0] mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-background/50 text-[#64ffda] border-[#64ffda]/20 px-3 py-1 text-sm"
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
