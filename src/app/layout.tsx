import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['100','300','400','500','700'],
  variable: '--font-roboto',
  preload: false,
  subsets: ['latin']
})
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>       
        <body>{children}</body>  
    </html>
  )
}
