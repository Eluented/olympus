import React from "react";
import Layout from "../components/Layout";

export default function contactUs() {
  return (
    <Layout> 
        <div className="grid grid-cols-1 md:grid-cols-5 w-screen h-screen ">
          <div className="flex w-full h-full bg-fixed bg-center bg-cover relative col-span-3">
            <div className="map-container w-full ">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9911.966138650401!2d-0.1881295!3d51.6050437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9bb0d783c186d3c2!2sOlympus%20Fish%20Restaurant!5e0!3m2!1sen!2suk!4v1672937930537!5m2!1sen!2suk"
                className="w-full h-full bg-fixed bg-center bg-cover"
                frameborder="0"
                allowfullscreen
              >
                
              </iframe>
            </div>
          </div>
          <div className="w-full h-full  flex justify-center items-center col-span-2">

            <div className="flex flex-wrap flex-col w-10/12 bg-blue-black/20 pt-8 rounded-xl">
              <div className="mb-12 wgrow-0 shrink-0 basis-auto w-full px-3 md:px-6 xl:px-12">
                <div className="flex justify-between w-full">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">
                      <a href="https://goo.gl/maps/MCAgCT3VDrQjZKyv9" className="address-link">
                        Address
                      </a>
                    </p>
                    <p className="text-gray-400">     
                    140-144 Ballards Ln,<br/>
                    Church End, London,
                    N3 2PA
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full px-3 md:px-6 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Reservations</p>
                    <p className="text-gray-400"> +44 (0) 20 8371 8666</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}
