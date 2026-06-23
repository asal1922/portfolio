import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asal RazaviZadeh | Frontend Developer',
  description: 'Portfolio of Asal RazaviZadeh, a Frontend Developer with 2 years of professional experience at Ferdowsi Cloud and a 1-month full-time internship. Specializing in React, Next.js, and TypeScript.',
  keywords: 'Asal RazaviZadeh, Frontend Developer, React, Next.js, TypeScript, Tailwind CSS, Portfolio, Web Development, Ferdowsi Cloud',
  openGraph: {
    title: 'Asal RazaviZadeh | Frontend Developer',
    description: 'Frontend Developer with 2 years of experience at Ferdowsi Cloud Computing Company and a 1-month full-time internship. Explore my portfolio built with React, Next.js, and TypeScript.',
    url: 'https://asalrazavizadeh.me',
    siteName: 'Asal RazaviZadeh | Portfolio',
    images: [
      {
        url: 'https://56272d65c8.imgdist.com/pub/bfra/ude6fbl4/j8g/f93/usb/3D%20Modelling%202.gif',
        width: 453,
        height: 453,
        alt: 'Asal RazaviZadeh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://asalrazavizadeh.me',
    languages: {
      'fa': 'https://asalrazavizadeh.me',
      'en': 'https://asalrazavizadeh.me',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asal RazaviZadeh | Frontend Developer',
    description: 'Frontend Developer with 2 years at Ferdowsi Cloud & 1-month full-time internship. Check out my portfolio and frontend projects.',
    site: '@yourTwitterHandle',
    images: ['https://56272d65c8.imgdist.com/pub/bfra/ude6fbl4/j8g/f93/usb/3D%20Modelling%202.gif'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}