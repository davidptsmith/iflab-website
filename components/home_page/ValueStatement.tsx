import Link from "next/dist/client/link"
import TestimonialCard from "./TestimonialCard"


const ValueStatement = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-auto w-10/12  lg:px-4 h-full md:h-screen pt-8 pb-24 md:pb-36'>
            <div className='m-auto sm:w-2/3'>

                <h1 className='2xl:w-2/3'>
                    if/Lab Leverages Computational Processes to Create Value
                </h1>
                <p className='text-justify'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid debitis, maxime alias in esse similique itaque? Nobis corrupti blanditiis sequi neque. Cumque itaque porro cum cupiditate quibusdam natus. Rem perspiciatis ut illo placeat nostrum, aliquid amet quisquam voluptate tempora, ad ab fuga obcaecati iste eveniet dolor rerum? Asperiores, illo.
                </p>
            </div>
            <div className='h-full overflow-hidden '>
                <img className='h-full object-cover' alt='Precinct Computational Art Project' src=".\images\HomePageImages\06.jpg" />
            </div>

        </div>
    )
}

export default ValueStatement
