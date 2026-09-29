'use client'

import { MapPin } from '@phosphor-icons/react'
import { Navigation } from '@/components/layout/navigation'
import { Social } from '@/components/social'
import { About } from '@/components/sections/about'
import { Education } from '@/components/sections/education'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'
import { AnimatedBackground } from '@/components/features/animated-background'
import { ThemeToggle } from '@/components/theme-toggle'

export default function HomeContent() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-clip bg-background antialiased">
      <AnimatedBackground />
      
      <div className="fixed right-4 top-4 z-20 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
          <div className="self-start lg:sticky lg:top-12 lg:col-span-5">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Portfolio / 2026
              </p>
              <h1 className="max-w-md text-4xl font-semibold leading-none tracking-[-0.045em] text-foreground sm:text-5xl">
                Pape DIAWARA
              </h1>
              <p className="mt-6 text-xl font-medium leading-snug text-primary sm:text-2xl">
                Python Software Engineer
                <span className="mt-1 block text-base font-normal text-muted-foreground sm:text-lg">
                  Data & Research Platforms
                </span>
              </p>
              <div className="mt-8 flex flex-col gap-5 text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" weight="regular" />
                  <span>Paris</span>
                </div>
              </div>
              <p className="mt-8 max-w-[38rem] text-lg leading-relaxed text-muted-foreground lg:max-w-sm">
                I build scalable data systems, reliable Python services, and research-oriented platforms for analytics and engineering teams.
              </p>
            </div>
            
            <div className="mt-12">
              <Navigation />
            </div>
            
            <div className="mt-10 border-t border-border pt-6 lg:max-w-sm">
              <Social />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="prose max-w-none dark:prose-invert">
              <About />
              <Education />
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
