import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Pape Ibrahima Diawara',
    default: 'Pape Ibrahima Diawara - Software Engineer',
  },
  description: 'Software engineer with experience in building high-quality web applications.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Data Engineer',
    'Python Developer',
    'React Developer',
    'Next.js',
    'Django',
    'AWS',
    'Machine Learning',
    'AI Applications',
    'Web Development',
    'Data Engineering',
    'Paris',
    'France'
  ],
  authors: [{ name: 'Pape DIAWARA', url: 'https://pidiawara.co' }],
  creator: 'Pape DIAWARA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pidiawara.co',
    title: 'Pape DIAWARA - Software Engineer',
    description: 'Software Engineer specializing in full-stack development, data engineering, and AI applications.',
    siteName: 'Pape DIAWARA Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pape DIAWARA - Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pape DIAWARA - Software Engineer',
    description: 'Software Engineer specializing in full-stack development, data engineering, and AI applications.',
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
  themeColor: '#0a192f',
  metadataBase: new URL('https://pidiawara.co'),
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0a192f" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="theme-color" content="#0a192f" />
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
