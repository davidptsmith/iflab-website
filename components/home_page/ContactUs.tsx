import Link from "next/dist/client/link"
import { AiOutlineRight } from "react-icons/ai"
const ContactUs = () => {
    return (

        <div className=" md:h-screen lg:px-4 md:w-11/12 w-10/12 pt-24 mx-auto z-10 grid grid-cols-1 md:gap-4 md:grid-cols-2">


            <div className="w-full md:h-full overflow-hidden m-auto">
                <img className="object-cover md:h-full w-full" 
                src="/images/HomeHeroImages/05.jpg"
                />
            </div>


            
            <div className="md:w-2/3 md:my-auto pt-8 md:ml-16">

            
            <div className="flex items-baseline  ">
              {/* ////////////////////  update the link to contact page /////////////////// */}
                <Link href="/Contact" passHref >    

            <h1 className="font-semibold text-black bottom-0 h-full  cursor-pointer text-left ">Contact Us<br/> About Your Project  
            <AiOutlineRight
            className=" ml-2  bg-opacity-20 inline-flex text-3xl text-black "
            />
            </h1> 
            </Link>
            </div>
                <div className=" lg:text-justify md:text-justify text-left  ">

                    <p className=" lg:text-justify md:text-justify text-left  ">
                        If/LAB is a multidisciplinary design and consultancy company with a focus on the use of software for the purposes of design, manufacture and building. if/LAB currently focuses on art and architecture, and aim to continually be at the forefront of innovation.
                    </p>
                    <br className='hidden lg:visible' />

                </div>
            </div>


        </div>

    )
}

export default ContactUs