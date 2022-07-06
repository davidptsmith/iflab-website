import Link from "next/link";
import React from "react";

class NoImagesCard extends React.Component {
  render() {
    return (
      <div className=" overflow-hidden felx md:h-72 justify-items-center  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:text-white  hover:bg-black hover:bg-opacity-40 relative">
        <Link href="/Contact" passHref >
          <div className="p-4 my-auto h-full">
            <h2 className="max-h-full text-xl md:text-center text-left mt-4  font-bold text-semibold min-w-full align-bottom  object-cover  m-auto">
              No results from your search...
              <br />
              <br />
              Think we should look into something?
              <br />
              <br />
              Get in contact, we would love to hear about it!
            </h2>
            <h3 className="max-h-full  text-lg mt-4 font-light min-w-full align-bottom object-cover md:text-center text-left m-auto">
              Click this card to contact us...
            </h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default NoImagesCard;
