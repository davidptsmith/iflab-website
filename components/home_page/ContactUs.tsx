import Link from "next/dist/client/link";
import { AiOutlineDoubleRight, AiOutlineRight } from "react-icons/ai";
import NavigationText from "../Utilities/NavigationText";
import {AltTextFromImage} from "../Utilities/Helpers"

const ContactUs = () => {
  return (
    <div className="  min-h-[640px] lg:px-4 md:w-4/5 w-10/12   mx-auto z-10 grid grid-cols-1 md:gap-4 md:grid-cols-2">
      <div className="w-full md:h-full overflow-hidden m-auto">
        <img
          className="object-cover md:h-full w-full"
          src="/images/HomeHeroImages/05_ifLab_Architecture_Ravensthorpe.jpg"
          alt={AltTextFromImage("05_ifLab_Architecture_Ravensthorpe")}
        />
      </div>

      <div className="md:w-2/3 md:my-auto  md:ml-16">
        <div className="flex items-baseline  ">
          {/* ////////////////////  update the link to contact page /////////////////// */}

          <h1 className="font-semibold text-black bottom-0 h-full  cursor-pointer text-left ">
            Contact Us
            <br /> About Your Project
          </h1>
        </div>
        <div className=" lg:text-justify md:text-justify text-left  ">
          <p className=" lg:text-justify md:text-justify text-left  ">
            if/LAB is a transdisciplinary design and technology studio based in
            Perth, Western Australia.
          </p>
          <p className=" lg:text-justify md:text-justify text-left  ">
            We leverage innovation in design, technology, and manufacturing to
            enable equitable access to better design for all.
          </p>
          <p className=" lg:text-justify md:text-justify text-left  ">
            By asking "what if?" we unlock new avenues for design and delivery
            across sectors and scales.
          </p>
          <p className=" lg:text-justify md:text-justify text-left  ">
            Our team of architects, designers, computational experts, and
            software developers are ready to change the future by changing
            building, today.
          </p>
          <br className="hidden lg:visible" />
        </div>

        <Link href="/Contact" passHref={true}>
          <div className="border-t-2 cursor-pointer">
            <h3>
              We are always happy to assist <br />
              others solver their problems.
              <br />
              Reach us here
              <AiOutlineDoubleRight className="  p-1 text-2xl text-gray-600 inline-block cursor-pointer" />
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
