'use client'

import { CustomLink } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + Math.min(160, window.innerHeight * 0.3)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="flex flex-wrap gap-2 lg:flex-col" aria-label="Page sections">
      {[
        ['ABOUT', '#about'],
        ['EDUCATION', '#education'],
        ['EXPERIENCE', '#experience'],
        ['SELECTED WORK', '#projects'],
        ['CONTACT', '#contact'],
      ].map(([label, href]) => (
        <CustomLink
          key={href}
          href={href}
          className={cn(
            'group flex min-h-11 w-fit items-center gap-3 rounded-full border border-border px-3 text-[0.7rem] font-semibold tracking-[0.12em] text-muted-foreground hover:border-primary/40 hover:text-foreground lg:min-h-0 lg:rounded-none lg:border-0 lg:px-0 lg:py-1 lg:text-xs lg:tracking-[0.16em]',
            activeSection === href.slice(1)
              ? 'border-primary/40 bg-primary/10 text-primary lg:bg-transparent'
              : ''
          )}
          aria-current={activeSection === href.slice(1) ? 'location' : undefined}
        >
          <span
            className={cn(
              'hidden h-px w-5 bg-border transition-[width,background-color] duration-200 group-hover:w-9 group-hover:bg-foreground lg:block',
              activeSection === href.slice(1) ? 'w-9 bg-primary' : ''
            )}
            aria-hidden="true"
          />
          {label}
        </CustomLink>
      ))}
    </nav>
  )
}
