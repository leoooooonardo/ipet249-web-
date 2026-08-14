import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { SeleccionProvider } from '@/components/providers/seleccion-provider'
import { AuthProvider } from '@/components/providers/auth-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body', weight: ['400', '600', '700', '800'] })
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'IPET 249 "Nicolás Copérnico" - Instituto Técnico de Córdoba',
  description: 'Instituto Provincial de Educación Técnica 249 en Córdoba. Formación técnica en Automotores, Informática, Mecánica y Electrónica con más de 75 años de trayectoria.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${ibmPlexMono.variable} bg-background`}>
      <body className="antialiased bg-background text-foreground">
        <AuthProvider>
          <SeleccionProvider>
            <Header />
            {children}
            <Footer />
          </SeleccionProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
