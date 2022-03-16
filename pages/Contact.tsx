// @ts-ignore
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/contact_page/ContactMap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Nav from "../components/NavBar/Nav";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      <div className=" lg:mt-14 mt-8  mx-auto prose max-w-none w-11/12 md:w-8/12 md:pt-14 md:pb-48  ">
        <div className="  mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-12   lg:mt-8 ">
          <img
            alt=""
            className="h-full object-cover "
            src="\images\HomeHeroImages\08.jpg"
          />

          <div className="">
            {/*Table for data */}
            <h1 className="font-semibold text-black  text-left pt-24 ">
              Contact Us
            </h1>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd className="mt-2 text-sm text-gray-500">0412345678</dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  office@intensivefield.com
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Address </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  17/210 Bagot Rd, Subiaco, Perth, Western Australia{" "}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}

      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
