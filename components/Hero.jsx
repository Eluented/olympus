import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { useRouter } from "next/router";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(false);

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  const appearOptions = {
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return setVisible(entry.isIntersecting);
        } else {
          setVisible(entry.isIntersecting);
          return () => observer.unobserve(domRef.current);
        }
      });
    }, appearOptions);

    observer.observe(domRef.current);
  }, [isVisible]);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const menuOnClick = () => {
    router.push("/menu");
  };

  return (
    <>
      <Parallax
        bgImage="/fishBackground2.jpeg"
        strength={400}
        bgImageStyle={{
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="hero flex justify-center items-center h-screen ">
          {/* OVERLAY */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />

          <div
            className={`title p-5 z-[2] fade-in-section ${
              isVisible ? "is-visible" : ""
            }`}
            ref={domRef}
          >
            <p className="text-sm">EST 1998</p>
            <h2 className="text-4xl resp:text-6xl md:text-7xl font-bold">
              Olympus Fish and Chips
            </h2>
            <p className="py-5 text-l md:text-xl ml-1">
              Serving Traditional Fish and Chips in Finchley Central for over 24
              Years
            </p>
            <button onClick={menuOnClick}>View Menu</button>

            <div className="absolute w-full display md:space-x-10 bottom-20 left-50 hidden md:flex">
              <a
                target="_blank"
                href="https://www.just-eat.co.uk/restaurants-olympus-fish-restaurant-finchley-central/menu"
                className="hover:before:w-0"
              >
                <div className="w-40 md:w-40 overflow-hidden object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover">
                  <Image
                    src="/just-eat.png"
                    width={210}
                    height={50}
                    layout="responsive"
                    className="object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover cursor-pointer"
                  />
                </div>
              </a>

              <a
                target="_blank"
                href="https://deliveroo.co.uk/menu/london/finchley-central/olympus-fish-and-chips"
                className="hover:before:w-0"
              >
                <div className="w-40 overflow-hidden object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover  ">
                  <Image
                    src="/deliveroo-logo.png"
                    width={210}
                    height={50}
                    className="object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover cursor-pointer"
                  />
                </div>
              </a>

              <a
                target="_blank"
                href="https://www.ubereats.com/gb/store/olympus-fish-%26-chips-restaurant/x2xexq7MQga5RjbmH35fUw"
                className="hover:before:w-0"
              >
                <div className="w-40 overflow-hidden object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover  cursor-pointer">
                  <Image
                    src="/uber-eats.png"
                    width={210}
                    height={50}
                    layout="responsive"
                    className="object-cover duration-700 ease-in-out bg-fixed bg-center bg-cover"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Parallax>

      <section className="h-36 md:h-52 w-full bg-fixed bg-center bg-cover relative bg-blue-black  ">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <p className="text-2xl md:text-5xl font-medium lines w-full mt-3 px-2">
            Open 7 Days a Week
          </p>

          <p className="text-xl md:text-3xl text-center mt-5">
            12:00pm to 9:30pm
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1  md:grid-cols-2 w-screen h-full md:h-5/4 relative">
        <div className="h-full w-full bg-teal-700 hover:bg-teal-900 duration-300 ease-out">
          <div className="mx-10 my-16 md:mx-20 md:my-20">
            <h1 className="mb-10 text-4xl md:text-6xl text-center font-bold ml-4">
              <a id="aboutus" className="cursor-default">
                Our Story
              </a>
            </h1>
            <div className="text-l ">
              <p className="ml-1">
                In 1998, Michael made the decision to fulfil a lifelong dream of
                his and open his very own restaurant. In the heart of Finchley
                Central, he opened
                <span className="font-bold"> Olympus</span>.
              </p>

              <p className="ml-1 mt-5">
                As the demand for their delicious Fish & Chips increased along
                with their following of faithful customers, Michael made the
                decision to grow their business by opening a restaurant next
                door and to add a special touch, he decided to offer a variety
                of Turkish mezes
                {!isReadMore ? "..." : ""}
              </p>

              <div className="flex justify-center items-center">
                {!isReadMore && (
                  <button onClick={handleReadMore} className="mt-6 bg-teal">
                    Read More
                  </button>
                )}
              </div>

              {isReadMore && (
                <p className="ml-1 mt-5 ">
                  As the years passed,{" "}
                  <span className="font-bold">Olympus</span> became a beloved
                  institution in their community. They took pride in serving
                  fresh fish directly from the port of Grimsby, and they are
                  known for their generous portion sizes.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-[20rem] md:h-full">
          <div className="overflow-hidden relative group w-full h-full">
            <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
              <div>
                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">Restaurant Dining</div>

                  <div className="opacity-60 text-sm ">
                    This picture was taken in 2012
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              src="/restaurant-sitting-area.png"
            />
          </div>
        </div>

        <div className="w-full h-[20rem] md:h-full overflow-hidden">
          <div className="overflow-hidden relative group w-full h-full">
            <div className=" z-50 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2  text-white flex items-end">
              <div>
                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                  <div className="font-bold">Cod Batter & Chips</div>

                  <div className="opacity-60 text-sm ">
                    Served in the Restaurant
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
              src="/cod3.jpg"
            />
          </div>
        </div>

        <div className="h-full w-full bg-teal-700 hover:bg-teal-900 duration-300 ease-out ">
          <div className="mx-10 my-16 md:mx-20 md:my-20">
            <h1 className="mb-10 text-4xl md:text-6xl text-center font-bold">
              <a className="cursor-default">Our Mission</a>
            </h1>
            <p className="ml-1 text-l">
              Our mission is to provide our customers with the highest quality
              Fish & Chips, made using only the freshest ingredients and cooked
              to perfection and our friendly and welcoming staff strive to make
              every visit to our restaurant & takeaway a memorable one.
            </p>

            <p className="ml-1 text-l mt-5">
              We strive to be a community hub where people can come together to
              enjoy a delicious meal in a warm and inviting atmosphere, and we
              are committed to exceeding our customers' expectations at every
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
