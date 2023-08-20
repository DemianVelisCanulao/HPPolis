
import type { Metadata } from 'next'
import "./radioBtn.scss"

export const metadata: Metadata = {
  title: 'Feliz Cumple',
  description: 'Invitación para el cumpleaños de Amapolis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  
  )
}
