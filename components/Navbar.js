import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  // hamburger menu
  const [nav, setNav] = useState(false);

  // color changes when scrolled
  const [textColor, setTextColor] = useState("white");

  // useEffect(() => {
  //   // when you scroll background and text color changes
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor('#fffff')
  //       setTextColor('#00000')
  //     } else {
  //       setColor('transparent')
  //       setTextColor('#fffff')
  //     }
  //   }
  //   // each time user scrolls it runs function
  //   window.addEventListener('scroll', changeColor)
  // })

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className="bg-gradient-to-b from-zinc-900  fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <nav className="max-w-[1280px] m-auto flex justify-between items-center p-4 text-white ">
        <ul>
          <li>
            <h1
              style={{ color: `${textColor}` }}
              className="text-3xl font-bold"
            >
              <Link href="/">
                <a>Olympus</a>
              </Link>
            </h1>
          </li>
        </ul>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 text-xl">
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>

          <li className="p-4 text-xl">
            <Link href="/#aboutus">
              <a>About us</a>
            </Link>
          </li>

          <li className="p-4 text-xl">
            <Link href="/contact-us">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#aboutus">
                <a>About us</a>
              </Link>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact-us">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
