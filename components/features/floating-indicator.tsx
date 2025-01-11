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
          className="fixed top-4 left-4 bg-black/40 backdrop-blur-sm text-white py-2 px-4 rounded-lg shadow-lg z-50 lg:hidden"
        >
          <div className="flex items-center">
            <h2 className="text-sm font-medium capitalize opacity-90">{activeSection}</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
