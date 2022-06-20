// @ts-ignore
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/contact_page/ContactMap";
import Footer from "../components/Footer";
import ContactCarousel from "../components/contact_page/ContactCarousel"
import Navbar from "../components/Navbar";
import Nav from "../components/NavBar/Nav";
import styles from "../styles/Home.module.css";
import fs from "fs";

const Home: NextPage  = ({ imagePaths }) => {
  return (
    <div>
      <div className="sticky  top-0 w-full bg-white z-50">
        <Nav />
      </div>

      <div className="    mx-auto prose max-w-none w-11/12 md:w-10/12   my-12  ">
        <div className="  mx-auto md:grid md:grid-cols-3 md:gap-12 2xl:gap-28 flex-col-reverse flex     ">
        {/* <div className="  mx-auto sm:grid sm:grid-cols-1 lg:grid-cols-3 md:gap-12 order-last flex   "> */}

        <div className=" relative w-full md:h-full h-96 object-cover  col-span-2 ">

          <ContactCarousel CarouselData={imagePaths}/>
          </div>
          {/* <img
            alt=""
            className="h-full object-cover "
            src="\images\HomeHeroImages\08.jpg"
          /> */}

          <div className="my-auto">
            {/*Table for data */}
            <h1 className="font-semibold text-black  text-left ">
              Contact Us
            </h1>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-8 lg:gap-x-8">
              {/* <div className="border-t my-auto   border-gray-200 pt-2">
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd className="mt-2 text-sm text-gray-500">0412345678</dd>
              </div> */}

              <div className="border-t my-auto  border-gray-200 pt-2">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  office@intensivefieldslab.com
                </dd>
              </div>

              <div className="border-t  my-auto border-gray-200 pt-2">
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

export async function getStaticProps() {
  // Get the hero image paths
  const testFolder = "public/images/HomeHeroImages";


  const imagePaths = fs.readdirSync(testFolder).map((image) => {
    return {
      image: "/images/HomeHeroImages" + "/" + image,
    };
  });

  //pass them as props
  return {
    props: {
      imagePaths,
    },
  };
}
