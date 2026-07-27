'use client'

import React, { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let animationFrame: number | null = null
    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }

      animationFrame = requestAnimationFrame(() => {
        lightRef.current?.style.setProperty('--spotlight-x', `${event.clientX}px`)
        lightRef.current?.style.setProperty('--spotlight-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        ref={lightRef}
        className="h-full w-full opacity-70 [background:radial-gradient(700px_circle_at_var(--spotlight-x,22%)_var(--spotlight-y,18%),hsl(var(--primary)/0.12),transparent_70%)] dark:opacity-50"
      />
    </div>
  )
}
