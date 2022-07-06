import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import IflabLogoSVG from "../IfLabLogoSVG";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <nav className=" lg:pt-2 pt-4 z-50 cursor-pointer w-11/12   flex flex-row  justify-between self-center  m-auto pb-4  ">
        <div className="flex-shrink-0 my-auto  pt-4 md:pt-2    md:w-32 w-24  items-center h-14 text-gray-600">
          <IflabLogoSVG />
        </div>

        {/* <div className="hidden justify-end md:block"> */}
        <div className="w-full  flex-grow lg:flex lg:items-center pt-12 cursor-pointer hidden sm:visible md:w-auto justify-end">
          <Link href="/" passHref>
            <div className="navButtons">Home</div>
          </Link>
          <Link href="/About" passHref>
            <div className="navButtons">About</div>
          </Link>
          <Link href="/Projects" passHref>
            <div className="navButtons">Projects</div>
          </Link>
          <Link href="/Insights" passHref>
            <div className="navButtons">Insights</div>
          </Link>
          <Link href="/Contact" passHref>
            <div className="navButtons">Contact</div>
          </Link>

          {/* </div> */}
        </div>

        <div className="grid grid-cols-2 lg:hidden ">
          {/* icon */}
          <div className="-mr-8 flex ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white h-10 mr-2 w-10 inline-flex items-center my-auto justify-center p-2 rounded-md text-gray-400 hover:text-gray-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden " id="mobile-menu">
                <div ref={ref} className="bg-opacity-30 pt-2 pb-3 space-y-1 ">
                  {/* links */}

                  <Link href="/" passHref>
                    <div className="navButtons">Home</div>
                  </Link>
                  <Link href="/About" passHref>
                    <div className="navButtons">About</div>
                  </Link>
                  <Link href="/Projects" passHref>
                    <div className="navButtons">Projects</div>
                  </Link>
                  <Link href="/Insights" passHref>
                    <div className="navButtons">Insights</div>
                  </Link>
                  <Link href="/Contact" passHref>
                    <div className="navButtons">Contact</div>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
