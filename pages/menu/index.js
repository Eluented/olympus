import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <Layout title="Menu">
      <div className="flex flex-col justify-content items-center md:grid md:grid-cols-2 w-screen h-screen relative">
        {/* OVERLAY */}

        {/* First Image */}
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover relative w-full h-full">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />

          <div className="title p-5 z-[2] bg-teal-700 hover:scale-110 duration-500">
            <Link href="/menu/restaurant">
              <a>
                <div>
                  <h2 className="text-4xl md:text-7xl font-bold">Restaurant</h2>
                  <p className="text-sm">Menu</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="image-wrapper w-full h-full">
            <Image
              alt="Restaurant"
              src="/restaurant.jpg"
              layout="fill"
              className="w-full h-full object-cover absolute duration-700 ease-in-out bg-center bg-cover"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover relative w-full h-full">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" />

          <div className="title p-5 z-[2] bg-teal-700 hover:scale-110 duration-500">
            <Link href="/menu/takeaway">
              <a>
                <div>
                  <h2 className="text-4xl md:text-7xl font-bold">Takeaway</h2>
                  <p className="text-sm">Menu</p>
                </div>
              </a>
            </Link>
          </div>

          <div className="image-wrapper w-full h-full">
            <Image
              alt="Takeaway"
              src="/takeaway.jpg"
              layout="fill"
              className="w-full h-full object-cover absolute duration-700 ease-in-out bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
