import Link from "next/dist/client/link";
import TestimonialCard from "./TestimonialCard";
import NavigationText from "../Utilities/NavigationText";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

const ValueStatement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 min-h-[800px] mx-auto w-10/12  md:px-4 h-full lg:pt-2  2xl:pt-24 pt-8 pb-24 lg:pb-36">
      {/* <div className="m-auto sm:w-2/3 "> */}
      <div className="m-auto  md:w-4/5 ">
        <h1 className="2xl:w-4/5 ">
          We ask <b className="underline">What if</b> we could change the future by changing building?
        </h1>
        <div className=" text-lg font-light">
          <p>
            <span className="text-2xl font-semibold">
              {" "}
              We are <b>IMPACTFUL.</b>{" "}
            </span>{" "}
            <br />- Acknowledging the potential for positive change through design.
          </p>
          <p>
            <span className="text-2xl font-semibold">
              We are <b>ETHICAL.</b>{" "}
            </span>{" "}
            <br />- Design for good and access for all.
          </p>
          <p>
            <span className="text-2xl font-semibold">
              We are <b>DEFIANT.</b>{" "}
            </span>{" "}
            <br />- Challenging the status quo and always searching for a better process and outcome.
          </p>
        </div>
        <Link href={"/Contact"} passHref={true}>
          <div className="border-t-2 cursor-pointer">
            <h3>
              Want us to help you change the way you build?
              <AiOutlineDoubleRight className="  p-1 mb-1 text-2xl text-gray-600 inline-block cursor-pointer" />

            </h3>
            {/* <h3>
              Contact us here
            </h3> */}
          </div>
        </Link>
      </div>
      <div className="md:h-full  overflow-hidden ">
        <img
          className="md:h-full h-72 max-h-screen  object-cover"
          alt="Precinct Computational Art Project"
          src=".\images\HomePageImages\06_ifLab_Public_Art_Precinct.jpg"
        />
      </div>
    </div>
  );
};

export default ValueStatement;
