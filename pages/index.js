import Head from "next/head";
import Baffle from "baffle-react";
import baffle from "baffle";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olympus Fish and Chips</title>
        <meta name="description" content="Fish and Chips Restaurant Finchley Ballards Lane" />
        <meta name="keywords" content="Fish and Chips Turkish Restaurant Take Away Grilled Fish Fried Fish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Homepage">
          <Hero />
          </Layout>
    </>
  );
}
{
  /* <div className='img_group'>
  <div className='img_group_inner'>
    <Image src='/assets/onur.png' alt='Onur Belek' width={200} height={400} />
  </div>
</div> */
}
