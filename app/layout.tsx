import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Pape DIAWARA',
    default: 'Pape DIAWARA - Python Software Engineer',
  },
  description: 'Python software engineer building scalable data systems, backend services, and research-oriented platforms.',
  keywords: [
    'Software Engineer',
    'Python Software Engineer',
    'Research Platforms',
    'Data Engineer',
    'Python Developer',
    'Backend Engineer',
    'Data Platforms',
    'Large-Scale Data Processing',
    'Distributed Systems',
    'LLM Data Classification',
    'Django',
    'FastAPI',
    'AWS',
    'Data Engineering',
    'Paris',
    'France'
  ],
  authors: [{ name: 'Pape DIAWARA', url: 'https://pidiawara.com' }],
  creator: 'Pape DIAWARA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pidiawara.com',
    title: 'Pape DIAWARA - Python Software Engineer',
    description: 'Python software engineer building scalable data systems, backend services, and research-oriented platforms.',
    siteName: 'Pape DIAWARA Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pape DIAWARA - Python Software Engineer',
    description: 'Python software engineer building scalable data systems, backend services, and research-oriented platforms.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg' }
    ]
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://pidiawara.com'),
  alternates: {
    canonical: '/'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#101412' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
