import Link from "next/dist/client/link"

//To Do
//create grid to control the location of the card elements 
// align the text to the bottom of the element 

const TestimonialCard = ({ quote, personName, personPosition, companyLogo }) => {
    return (

        <div className="relative md:p-8 p-4 text-gray-800 bg-white rounded-lg shadow-md min-h-[350px]">
            <div className="mb-2">
                <p className="lg:mb-24   text-normal leading-loose text-gray-600 ">
                    <b className="text-3xl text-blue-400 font-serif font-semibold italic align-text-middle">"</b>
                    {quote}
                    <b className="text-3xl text-blue-400 font-semibold font-serif italic align-text-middle">"</b>
                </p>
                <div className="flex flex-col items-end  bottom-0  h-full w-full  ">
                    {/* <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 ">
                    <img src={companyLogo} alt="photo"
                        className="object-cover object-center w-full h-full" />
                </div> */}
                    <div className="sm:absolute inset-x-0 bottom-0 md:px-8 md:pb-8 px-2">
                        <h5 className="font-bold text-3xl  md:leading-4 text-gray-600 text-right  w-full">{personName}</h5>
                        <p className="text-lg text-blue-400 md:leading-4 text-right w-full "> {personPosition} </p>
                    </div>

                </div>
        </div>
    </div>

        // <div className="bg-white  rounded-t-md  shadow-md w-full  mx-auto m-2 sm:m-4  p-1">

        //     <div className="bg-white rounded-lg px-2 sm:px-6 h-full  grid-row-2 grid">

        //         <div className="grid grid-cols-2 sm:flex   top-0 mb-2  sm:mb-4">

        //             <div className="w-full h-full  mt-2 over-hidden">

        //                 <img className=" h-full object-cover   "
        //                     src={companyLogo} alt="photo" />
        //             </div>

        //             <div className=" ">
        //                 <p className="text-xl text-gray-700 -mt-4 md:mt-4 font-normal ">{personName}</p>
        //                 <p className="text-base text-blue-400 -mt-4 md:mt-0 font-normal">  {personPosition} </p>
        //             </div>
        //         </div>



        //         <div className="   bg-black  px-2 md:px-6 h-full inline-block ">
        //             {/* <p className="font-bold mr-1 text-4xl text-blue-400">
        //                         “
        //                     </p> */}
        //             <p className="text-gray-400 leading-tight align-text-top
        //                 font-normal sm:text-base  h-full text-justify text-sm">

        //                 {quote}
        //             </p>
        //             {/* <p className="font-bold ml-1 text-4xl   text-blue-400  ">
        //                         ”
        //                     </p> */}


        //         </div>
        //     </div>


        // </div>
    )
}

export default TestimonialCard