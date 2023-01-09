import React from 'react'
import Link from 'next/link'
import Navbar from '/components/navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({title, children}){
  return (
    <>
        <Head>
        <title>{title? title + ' - Olympus': 'Olympus'}</title>
        <meta name="description" content="Fish and Chips Restaurant Finchley Ballards Lane" />
        <meta name="keywords" content="Fish and Chips Turkish Restaurant Take Away Grilled Fish Fried Fish" />
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
