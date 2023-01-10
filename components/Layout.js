import React from 'react'
import Link from 'next/link'
import Navbar from '/components/navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({children, title, description, keywords}){
  return (
    <>
        <Head>
        <title>{title? title + ' - Olympus Finchley': 'Olympus Fish and Chips Finchley'}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className="flex min-h-screen flex-col justify-between">
     
         <main className="layout">
            {children}
         </main>
    
        </div>
      <Footer />
    </>
  )
}
