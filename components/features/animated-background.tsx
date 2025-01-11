'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

export function AnimatedBackground() {
  const lightRef = useRef<HTMLDivElement>(null)
  const [isEnabled, setIsEnabled] = useState(true)

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isEnabled || !lightRef.current) return
    
    requestAnimationFrame(() => {
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }
    })
  }, [isEnabled])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        ref={lightRef}
        className="h-full w-full bg-background"
        style={{
          background: 'radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)'
        }}
      />
    </div>
  )
}
