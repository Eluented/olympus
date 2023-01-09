import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'

const NotFound = (title) => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/');
        }, 5000)
    }, [])

    return (
     <>
        <Head>
            <title>{title? title + ' - Olympus': 'Olympus'}</title>
            <meta name="description" content="Fish and Chips Restaurant Finchley Ballards Lane" />
            <meta name="keywords" content="Fish and Chips Turkish Restaurant Take Away Grilled Fish Fried Fish" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout title="Not Found">
            <div className="flex justify-center items-center h-screen">
                <h1>Oops...</h1>
                <h2>This page cannot be found Please go back to the <Link href="/" className='font-bold text-base'>HomePage</Link></h2>
            </div>
            </Layout>
        </>

    )
}

export default NotFound
