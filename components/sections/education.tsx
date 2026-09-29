'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Education() {
  return (
    <motion.section
      id="education"
      className="-mt-24 mb-28 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
          Education
        </h2>
      </div>
      <div className="border-t border-border py-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Paris
        </p>
        <h3 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          Computer Engineering Degree · Master in Computer Science
        </h3>
        <a
          href="https://www.epita.fr/en/homepage/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-base font-medium text-muted-foreground hover:text-primary"
        >
          EPITA — School of Engineering and Computer Science
          <ArrowSquareOut className="ml-2 h-4 w-4" weight="regular" />
        </a>
      </div>
    </motion.section>
  )
}
