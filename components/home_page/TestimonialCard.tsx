import Link from "next/dist/client/link"
// const TestimonialCard = ({ quote, personName, personPosition , companyLogo}) => {
//     return (
//         <div className="bg-white dark:bg-gray-800 rounded-t-md shadow-md w-full mx-auto m-8 p-8">
//             <div className="flex items-center md:items-start flex-col md:flex-row justify-center">

//                 <img alt="Company Logo" src={companyLogo}
//                     className="m-auto  block relative  w-1/3" />

//                 <div className="w-full md:w-2/3">
//                     <p className="text-gray-600 dark:text-white w-full md:w-5/6 m-auto italic md:text-justify text-left text-lg lg:text-xl">
//                         <span className="font-bold mr-1 text-4xl text-blue-400">
//                             “
//                         </span>
//                         {quote}
//                         <span className="font-bold ml-1 text-4xl text-blue-400">
//                             ”
//                         </span>
//                     </p>
//                     <div className="flex mt-8 items-center justify-left">
//                         <span className="font-semibold text-blue-400 mr-2 text-lg">
//                             {personName}
//                         </span>
//                         <span className="text-gray-400 text-xl font-light">
//                             /
//                         </span>
//                         <span className="text-gray-400 text-md ml-2">
//                             {personPosition}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TestimonialCard


const TestimonialCard = ({ quote, personName, personPosition, companyLogo }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-t-md  shadow-md w-full mx-auto m-2 sm:m-4  p-1">
            <div className="bg-white rounded-lg p-2 sm:p-6">
                <div className="grid grid-cols-1  sm:flex my-auto mb-2 space-x-2 sm:space-x-6 sm:mb-4">
                    <img className=" h-28 w-28  mb-2 justify-self-start self-center   px-2 space-x-2 mb-2 object-scale-down  "
                        src={companyLogo} alt="photo" />

                    <div className="justify-self-start self-center ">
                        <p className="text-xl text-gray-700 font-normal mb-1">{personName}</p>
                        <p className="text-base text-blue-400 font-normal">  {personPosition} </p>
                    </div>
                </div>

                <div>

                    <div className="  sm:grid-cols-2 items-center  space-x-2 px-2 md:px-6 sm:space-x-2 sm:mb-2">
                        {/* <p className="font-bold mr-1 text-4xl text-blue-400">
                                “
                            </p> */}
                        <p className="text-gray-400 leading-snug font-normal sm:text-base  text-justify text-xs">

                            {quote}
                        </p>
                        {/* <p className="font-bold ml-1 text-4xl   text-blue-400  ">
                                ”
                            </p> */}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default TestimonialCard