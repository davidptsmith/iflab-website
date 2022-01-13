import Link from "next/dist/client/link"
import { AiOutlineRight } from "react-icons/ai"
const ContactUs = () => {
    return (
        <div className=" lg:px-4 md:w-2/3 w-10/12 py-12 mx-auto z-10">
            <div className="flex relative bg-gray-50">

            <h1 className="font-semibold text-black  text-left ">Contact Us<br/> About Your Project</h1> 
            <AiOutlineRight
            className="  bg-opacity-20 bottom-0  inset-y-0 right-0  ml-4  text-3xl text-black cursor-pointer"
            />
            </div>

            <div className="  grid grid-cols-1 lg:grid-cols-2 lg:gap-12   lg:mt-8 ">

                <div className=" lg:text-justify md:text-justify text-left  ">

                    <p className=" lg:text-justify md:text-justify text-left  ">
                        If/LAB is a multidisciplinary design and consultancy company with a focus on the use of software for the purposes of design, manufacture and building. if/LAB currently focuses on art and architecture, and aim to continually be at the forefront of innovation.
                    </p>
                    <br className='hidden lg:visible' />
             
           

                </div>
                <div className="overflow-hidden   w-full h-full">

                    <img alt="" className='h-full object-cover'
                        src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Redcliffe%2F2021-03-29%2015_21_13-200322%20Key%20Stakeholder%20Meeting%203%20Presentation_Final%20Draft.pdf%20-%20Adobe%20Acrobat%20Pr.png?alt=media&token=43f32fe4-2c07-469f-b0d5-10527f99e6ec"
                    />

                </div>
            </div>


        </div>
    )
}

export default ContactUs