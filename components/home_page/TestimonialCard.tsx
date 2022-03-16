import Link from "next/dist/client/link";

//To Do
//create grid to control the location of the card elements
// align the text to the bottom of the element

const TestimonialCard = ({
  quote,
  personName,
  personPosition,
  companyLogo,
}) => {
  return (
    <div className="relative md:p-8 p-4 text-gray-800 bg-white rounded-lg shadow-md min-h-[350px]">
      <div className="mb-2">
        <p className="lg:mb-24   text-normal leading-loose text-gray-600 ">
          <b className="text-3xl text-blue-400 font-serif font-semibold italic align-text-middle">
            "
          </b>
          {quote}
          <b className="text-3xl text-blue-400 font-semibold font-serif italic align-text-middle">
            "
          </b>
        </p>
        <div className="flex flex-col items-end  bottom-0  h-full w-full  ">
          <div className="sm:absolute inset-x-0 bottom-0 md:px-8 md:pb-8 px-2">
            <h5 className="font-bold text-3xl  md:leading-4 text-gray-600 text-right  w-full">
              {personName}
            </h5>
            <p className="text-lg text-blue-400 md:leading-4 text-right w-full ">
              {" "}
              {personPosition}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
