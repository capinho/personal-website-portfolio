'use client'

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
        className="mx-auto inline-flex items-center justify-center px-5 text-sm text-muted-foreground"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        Designed and built by Pape DIAWARA · Paris
      </motion.p>
    </motion.footer>
  )
}
