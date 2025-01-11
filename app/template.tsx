'use client'

import { Providers } from '@/components/providers'
import { GoogleAnalytics } from '@/components/features/analytics'
import { FloatingIndicator } from '@/components/features/floating-indicator'
import { useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>('about')

  return (
    <Providers>
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      <FloatingIndicator activeSection={activeSection} />
      {children}
    </Providers>
  )
}
