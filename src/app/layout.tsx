
export const metadata = {
  title: 'Hotel Partner',
  description: 'Hotel Partner Itapoá',
  
}
import { client } from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { Inter } from 'next/font/google'
const inter = Inter({
  weight: ['200', '300', '400', '500', '700', '800'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
        <body>{children}</body>  
    </html>
  )
}
