import Link from "next/dist/client/link"

//To Do
//create grid to control the location of the card elements 
// align the text to the bottom of the element 

const TestimonialCard = ({ quote, personName, personPosition, companyLogo }) => {
    return (
        <div className="bg-white  rounded-t-md  shadow-md w-full  mx-auto m-2 sm:m-4  p-1">

            <div className="bg-white rounded-lg px-2 sm:px-6 h-full  grid-row-2 grid">

                <div className="grid grid-cols-2 sm:flex   top-0 mb-2  sm:mb-4">

                    <div className="w-full h-full  mt-2 over-hidden">

                        <img className=" h-28 w-full  object-cover   "
                            src={companyLogo} alt="photo" />
                    </div>

                    <div className=" ">
                        <p className="text-xl text-gray-700 -mt-4 md:mt-4 font-normal ">{personName}</p>
                        <p className="text-base text-blue-400 -mt-4 md:mt-0 font-normal">  {personPosition} </p>
                    </div>
                </div>



                <div className="   bg-black  px-2 md:px-6 h-full inline-block ">
                    {/* <p className="font-bold mr-1 text-4xl text-blue-400">
                                “
                            </p> */}
                    <p className="text-gray-400 leading-tight align-text-top
                        font-normal sm:text-base  h-full text-justify text-sm">

                        {quote}
                    </p>
                    {/* <p className="font-bold ml-1 text-4xl   text-blue-400  ">
                                ”
                            </p> */}


                </div>
            </div>


        </div>
    )
}

export default TestimonialCard