'use client'

import { useEffect, useState, RefObject } from 'react'

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.5 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [elementRef, options])

  return isIntersecting
}
