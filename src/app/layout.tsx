import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SNS Berlin - IT-Sicherheit & Netzwerklösungen',
  description: 'Professionelle IT-Sicherheit, Netzwerklösungen und Beratung in Berlin. Ihr Partner für sichere und effiziente IT-Infrastrukturen.',
  keywords: ['IT-Sicherheit', 'Netzwerk', 'Berlin', 'IT-Beratung', 'Cybersecurity'],
  authors: [{ name: 'SNS Berlin' }],
  creator: 'SNS Berlin',
  publisher: 'SNS Berlin',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://sns-berlin.de',
    title: 'SNS Berlin - IT-Sicherheit & Netzwerklösungen',
    description: 'Professionelle IT-Sicherheit, Netzwerklösungen und Beratung in Berlin.',
    siteName: 'SNS Berlin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNS Berlin - IT-Sicherheit & Netzwerklösungen',
    description: 'Professionelle IT-Sicherheit, Netzwerklösungen und Beratung in Berlin.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="font-public-sans antialiased">
        {children}
      </body>
    </html>
  )
}
