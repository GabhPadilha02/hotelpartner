"use client"
import { client } from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { About } from './components/About/Index'
import { ContactForm } from './components/ContactForm'
import { FindUs } from './components/FindUs'
import Header from './components/Header'
import { InitialSection } from './components/InitialSection'
import { MainGallery } from './components/MainGallery'
import './globals.css'



export default function Home() {
  return (  
      <ApolloProvider client={client}>
        <div>
          <Head>
            <title>Hotel Partner Itapoá</title>
          </Head>
          <Header />
          <InitialSection/>
          <About/>
          <MainGallery/>
          <ContactForm/>
          <FindUs/>
        </div>   
      </ApolloProvider>
        
  )
}
