'use client'

import { MapPin } from 'lucide-react'
import { Navigation } from '@/components/layout/navigation'
import { Social } from '@/components/social'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'
import { AnimatedBackground } from '@/components/features/animated-background'
import { FloatingIndicator } from '@/components/features/floating-indicator'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export default function HomeContent() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  
  return (
    <main className="relative min-h-screen bg-background antialiased">
      <AnimatedBackground />
      <FloatingIndicator activeSection={activeSection} />
      
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Pape DIAWARA
              </h1>
              <p className="mt-6 text-3xl font-medium text-emerald-400">
                Software Engineer
              </p>
              <div className="mt-10 flex flex-col gap-5 text-xl text-muted-foreground">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <span>Paris</span>
                </div>
              </div>
              <p className="mt-10 text-2xl text-muted-foreground">
                I'm a passionate software engineer specializing in Python, web technologies, AI, and machine learning.
              </p>
            </div>
            
            <div className="mt-14">
              <Navigation onSectionChange={setActiveSection} />
            </div>
            
            <div className="mt-10">
              <Social />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-xl max-w-none">
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
