'use client'

import { Github, Twitter, Linkedin, FileText } from 'lucide-react'
import { CustomLink } from '@/components/ui/link'

export function Social() {
  return (
    <div className="flex items-center gap-8">
      <CustomLink
        href="https://github.com/capinho"
        className="text-muted-foreground/60 hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="h-8 w-8" />
      </CustomLink>
      <CustomLink
        href="https://www.linkedin.com/in/pape-ibrahima-diawara/"
        className="text-muted-foreground/60 hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-8 w-8" />
      </CustomLink>
      <CustomLink
        href="https://x.com/Diiaawara"
        className="text-muted-foreground/60 hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter className="h-8 w-8" />
      </CustomLink>
      <CustomLink
        href="/resume.pdf"
        className="text-muted-foreground/60 hover:text-foreground transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <FileText className="h-8 w-8" />
      </CustomLink>
    </div>
  )
}
