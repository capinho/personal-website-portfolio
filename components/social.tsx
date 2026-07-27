'use client'

import { FilePdf, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import { CustomLink } from '@/components/ui/link'

export function Social() {
  return (
    <div className="flex items-center gap-2">
      <CustomLink
        href="https://github.com/capinho"
        className="rounded-full p-3 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GithubLogo className="h-5 w-5" weight="regular" />
      </CustomLink>
      <CustomLink
        href="https://www.linkedin.com/in/pape-ibrahima-diawara/"
        className="rounded-full p-3 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinLogo className="h-5 w-5" weight="regular" />
      </CustomLink>
      <CustomLink
        href="https://x.com/Diiaawara"
        className="rounded-full p-3 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <XLogo className="h-5 w-5" weight="regular" />
      </CustomLink>
      <CustomLink
        href="/resume.pdf"
        className="rounded-full p-3 text-muted-foreground hover:bg-accent hover:text-primary active:scale-[0.96]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <FilePdf className="h-5 w-5" weight="regular" />
      </CustomLink>
    </div>
  )
}
