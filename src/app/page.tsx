
import Head from 'next/head'
import { About } from './components/About/Index'
import { ContactForm } from './components/ContactForm'
import { FindUs } from './components/FindUs'
import Header from './components/Header'
import { InitialSection } from './components/InitialSection'
import { MainGallery } from './components/MainGallery'
import './globals.css'

export const metadata = {
  title: 'Hotel Partner',
  description: 'Hotel Partner Itapoá',
  keywords: ['Hotel', 'Itapoá', 'Hospedagem', 'Hotel litoral', 'Beira da praia', 'Resort à beira-mar', 'Piscina com vista para o mar', 'Restaurante à beira-mar', 'Acomodações com vista para o mar', 'Férias na praia', 'Atividades ao ar livre', 'Viagens em família', 'Comida local e regional' ],
  languages: {
    'pt-BR': '/pt-BR',
  },
  url:"hotelpartneritapoa.com.br",
  siteName: "Hotel Partner",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}



export default function Home() {
  return (  
        
        <>
          <Head>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
          </Head>
          <div>
            <Header />
            <InitialSection/>
            <About/>
            <MainGallery/>
            <ContactForm/>
            <FindUs/>
          </div> 
        </>
          
      
        
  )
}
