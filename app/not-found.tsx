'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        className="relative z-10 max-w-xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-6xl font-semibold tracking-tighter">404</h1>
        <h2 className="mb-6 text-2xl">Oops! Page not found</h2>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
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
