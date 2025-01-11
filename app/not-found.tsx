'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-[#ccd6f6] overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Oops! Page not found</h2>
        <p className="text-lg mb-8 text-[#8892b0]">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link href="/">
            Go back home
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
