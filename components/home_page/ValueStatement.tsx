import Link from "next/dist/client/link"
import TestimonialCard from "./TestimonialCard"
import NavigationText from "../Utilities/NavigationText"
import { AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";


const ValueStatement = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 min-h-[800px] mx-auto w-10/12  lg:px-4 h-full md:pt-24 pt-8 pb-24 md:pb-36'>
            <div className='m-auto sm:w-2/3 '>

                <h1 className='2xl:w-4/5'>
                    We ask "What if?" we could change future by changing building.
                </h1>
                <div className=" text-lg font-light">

                <p>
                   <span className="text-2xl font-semibold" >  We are <b>IMPACTFUL.</b> </span> <br/>
                    -      Acknowledging the potential for positive change through design
                </p>
                <p>
                <span className="text-2xl font-semibold" >We are <b>ETHICAL.</b> </span> <br/>
                    - Design for good and access for all
                </p>
                <p>
                <span className="text-2xl font-semibold" >We are <b>DEFIANT.</b> </span> <br/>
                    - Challenging the status quo and always searching for a better process and outcome
                </p>
                </div>
                <Link href={"./Contact"} passHref={true}>
                    <div className="border-t-2 cursor-pointer">
                        <h3>
                            Want us to help you change the way you build? 
                            <br />
                            Contact us here
                            <AiOutlineDoubleRight
                                className="  p-1 text-2xl text-gray-600 inline-block cursor-pointer"
                            />
                        </h3>
                    </div>
                </Link>
            </div>
            <div className='h-full overflow-hidden '>
                <img className='h-full object-cover' alt='Precinct Computational Art Project' src=".\images\HomePageImages\06.jpg" />
            </div>


        </div>
    )
}

export default ValueStatement
