'use client'

import { Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      className="relative z-10 border-t border-border py-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.p 
        className="mx-auto inline-flex items-center justify-center gap-2 px-5 text-sm text-muted-foreground"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Sparkles className="h-4 w-4 text-primary" />
        Crafted with{' '}
        <span className="text-primary">
          <Heart className="inline h-4 w-4 animate-pulse" aria-label="love" />
        </span>{' '}
        by Pape DIAWARA{' '}
        <Sparkles className="h-4 w-4 text-primary" />
      </motion.p>
    </motion.footer>
  )
}
