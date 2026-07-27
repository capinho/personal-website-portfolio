'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingIndicatorProps {
  activeSection: string | null;
}

export function FloatingIndicator({ activeSection }: FloatingIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set visibility based on scroll position
      setIsVisible(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && activeSection && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed left-4 top-4 z-20 rounded-full border border-border bg-card/85 px-4 py-2 text-foreground shadow-sm backdrop-blur-md lg:hidden"
        >
          <div className="flex items-center">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-xs font-semibold capitalize tracking-wide">{activeSection}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
