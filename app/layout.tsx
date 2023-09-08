import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ModalProvider } from '@/components/ModalProvider'
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* <body className={inter.className}> */}
        {/* <Navbar /> */}
        <NavigationMenuDemo />
        {/* <div>{children}</div> */}
        {/* <Footer /> */}
        {/* <ModalProvider /> */}
      </body>
    </html>
  )
}
