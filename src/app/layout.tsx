import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingContactButtons from '../components/FloatingContactButtons';
import '../styles/globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zup Rides - Premium Two Wheeler Rentals | Starts @ ₹399/Day',
  description: 'Explore the city with Zup Rides, your trusted two-wheeler rental agency. Rent premium bikes and scooters starting from just ₹399/day. Affordable, reliable, and hassle-free booking.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingContactButtons />
        <Analytics />
      </body>
    </html>
  )
}
