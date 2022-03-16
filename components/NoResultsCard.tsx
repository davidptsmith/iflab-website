import Link from "next/link";
import React from "react";

class NoImagesCard extends React.Component {
  render() {
    return (
      <div className=" overflow-hidden felx h-72 justify-items-center  rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:text-white  hover:bg-black hover:bg-opacity-40 ">
        <Link href="/Contact" passHref>
          <div>
            <h2 className="max-h-full text-3xl mt-12 font-mono font-bold text-semibold min-w-full align-bottom  object-cover text-center  m-auto">
              No results from your search...
              <br />
              Think we should look into something?
              <br />
              Get in contact, we would love to hear about it!
            </h2>
            <h3 className="max-h-full  text-xl mt-4 font-mono  min-w-full align-bottom object-cover text-center  m-auto">
              click this card...
            </h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default NoImagesCard;
