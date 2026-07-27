'use client'

import { GoogleAnalytics } from '@/components/features/analytics'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      {children}
    </>
  )
}
