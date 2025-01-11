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
    <nav className="hidden lg:flex flex-col gap-4 text-xl">
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
            'text-muted-foreground hover:text-foreground transition-colors',
            activeSection === href.slice(1)
              ? 'text-emerald-400'
              : ''
          )}
        >
          {label}
        </CustomLink>
      ))}
    </nav>
  )
}
