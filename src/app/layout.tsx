import React from 'react'
import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/layouts/MainLayout'
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Activity 1',
  },
  description: 'Coding Assestment of Sta. Clara International Corporation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={poppins.className}>
    <MainLayout>
      {children}
    </MainLayout>
    <Analytics />
    </body>
    </html>
  )
}
