import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Pape Ibrahima Diawara',
    default: 'Pape Ibrahima Diawara - Performance Analytics & Data Platforms',
  },
  description: 'Software engineer specializing in performance analytics, data platforms, and backend engineering.',
  keywords: [
    'Software Engineer',
    'Performance Analytics',
    'Performance Engineering',
    'Data Engineer',
    'Python Developer',
    'Backend Engineer',
    'Data Platforms',
    'Telemetry Analysis',
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
    title: 'Pape DIAWARA - Performance Analytics & Data Platforms',
    description: 'Software engineer specializing in performance analytics, data platforms, and backend engineering.',
    siteName: 'Pape DIAWARA Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pape DIAWARA - Performance Analytics & Data Platforms'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pape DIAWARA - Performance Analytics & Data Platforms',
    description: 'Software engineer specializing in performance analytics, data platforms, and backend engineering.',
    images: ['/og-image.png']
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f8f6' },
    { media: '(prefers-color-scheme: dark)', color: '#101412' }
  ],
  metadataBase: new URL('https://pidiawara.com'),
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f8060" />
        <meta name="msapplication-TileColor" content="#101412" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f6f8f6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#101412" />
      </head>
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
