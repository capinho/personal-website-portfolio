'use client'

import { Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      className="py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.p 
        className="flex items-center justify-center gap-4 text-2xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6 mx-auto inline-flex"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Sparkles className="h-8 w-8 text-[#64ffda]" /> 
        Crafted with{' '}
        <span className="text-[#64ffda]">
          <Heart className="h-8 w-8 inline animate-pulse" aria-label="love" />
        </span>{' '}
        by Pape DIAWARA{' '}
        <Sparkles className="h-8 w-8 text-[#64ffda]" />
      </motion.p>
    </motion.footer>
  )
}
