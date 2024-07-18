import './globals.css'
import './style/allstyle.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'




export const metadata: Metadata = {
  title: 'Develozy',
  description: 'Web Aevelopment and Digital Marketing Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='Home' className="scroll-smooth">
       <ClerkProvider>
      <body className='min-h-screen  bg-white'>
      
      {children}
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
     
      </body>
      </ClerkProvider>
    </html>
  )
}
