'use client'

import { CustomLink } from '@/components/ui/link'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface NavigationProps {
  onSectionChange?: (section: string) => void;
}

export function Navigation({ onSectionChange }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            onSectionChange?.(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onSectionChange])

  return (
    <nav className="hidden lg:flex flex-col gap-2" aria-label="Page sections">
      {[
        ['ABOUT', '#about'],
        ['EXPERIENCE', '#experience'],
        ['PROJECTS', '#projects'],
        ['CONTACT', '#contact'],
      ].map(([label, href]) => (
        <CustomLink
          key={href}
          href={href}
          className={cn(
            'group flex w-fit items-center gap-3 py-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground hover:text-foreground',
            activeSection === href.slice(1)
              ? 'text-primary'
              : ''
          )}
        >
          <span
            className={cn(
              'h-px w-5 bg-border transition-[width,background-color] duration-200 group-hover:w-9 group-hover:bg-foreground',
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
