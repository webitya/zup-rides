import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AdityaWeb - Education Platform",
  description: "Learn web development and more with AdityaWeb",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
