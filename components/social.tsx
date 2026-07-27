'use client'

import { Github, Twitter, Linkedin, FileText } from 'lucide-react'
import { CustomLink } from '@/components/ui/link'

export function Social() {
  return (
    <div className="flex items-center gap-2">
      <CustomLink
        href="https://github.com/capinho"
        className="rounded-full p-2.5 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </CustomLink>
      <CustomLink
        href="https://www.linkedin.com/in/pape-ibrahima-diawara/"
        className="rounded-full p-2.5 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </CustomLink>
      <CustomLink
        href="https://x.com/Diiaawara"
        className="rounded-full p-2.5 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </CustomLink>
      <CustomLink
        href="/resume.pdf"
        className="rounded-full p-2.5 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <FileText className="h-5 w-5" />
      </CustomLink>
    </div>
  )
}
