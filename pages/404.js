import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { Parallax } from "react-parallax";

const NotFound = (title) => {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 4000);
  // }, []);

  return (
    <>
      <Layout title="Page Not Found |">
        <Parallax
          bgImage="/fishBackground2.jpeg"
          strength={400}
          bgImageStyle={{
            backgroundPosition: "center",
            objectFit: "cover",
            backgroundSize: "cover",
          }}
          alt="background image of our fish and chips"
        >
          <div className="hero flex justify-center items-center h-screen bg-black/40">
            <div className="md:px-4 md:py-8 bg-black/50 px-2 py-4 rounded-xl">
              <h1 className="md:text-7xl text-4xl text-center">Page Not Found</h1>
              <p className="md:text-2xl mt-2 text-center">
                This page cannot be found, you are being redirected to the
                &nbsp;
                <Link href="/" className="">
                  home page
                </Link>
                &nbsp; in 4 seconds
              </p>
            </div>
          </div>
        </Parallax>
      </Layout>
    </>
  );
};

export default NotFound;
