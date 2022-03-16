import ValueStatement from "../home_page/ValueStatement"

const AboutSection = () => {
    return (
        <div className='prose max-w-none '>
        <div className='w-4/6 md:w-2/3 lg:mt-14 mt-8  mx-auto'>
                <div>
                    <div className="  grid grid-cols-1 md:mt-12 lg:grid-cols-2 lg:gap-12   lg:mt-8 ">

                        <div className=" md:grid md:pt-12 lg:text-justify md:text-justify text-left  ">

                            <h1 className="text-left ">About if/Lab</h1>

                            <p className=" lg:text-justify md:text-justify text-left  ">
                                if/LAB is a Perth-based design studio of transdisciplinary architects, designers, technologists, software developers, computational experts, and radical thinkers.  We recognise the urgency of adapting the way we work to enable accelerated industry transformation that can deliver better, cheaper, and faster design and technology enabled solutions for the built environment.                    </p>
                            <br className='hidden lg:visible' />
                            <p>
                                We employ a creative, transdisciplinary, and data-informed approach so that we can help to design a better future for all.  We believe in learning through exploring, creative solutions to complex problems, partnering with experts across domains, and using technology to provide end-to-end value through the delivery of highly robust processes and better end-products.
                            </p>
                            <br className='hidden lg:visible' />
                            <p>

                                We are experts in data, design, technology, research, strategy, sustainability, and modern methods of construction utilising prefabrication and advanced manufacturing.
                            </p>
                        </div>
                        <div className="overflow-hidden   w-full h-full">

                            <img alt="" className='h-full object-cover' src="\images\projects\Ravensthorpe\cover_image.jpg" />

                        </div>
                    </div>


                    {/* <h1 className="font-semibold text-black  text-left pt-24 ">Our Approach</h1> */}
                    {/* 
            <div className="  grid grid-cols-1 lg:grid-cols-2 lg:gap-12   lg:mt-8 ">
                
                <div>

                    <p className=" lg:text-justify md:text-justify text-left  ">
                        Our complex and unique approach allows us as designers to create the unimaginable. Traditional design tools limit designers in terms of conceptual thinking and representation. Design coding, on the other hand, allows the designer to explore processes by which new and coherent structures, patterns and properties ‘emerge’ from within complex systems.
                    </p>
                    <br className='hidden lg:visible' />
                    <p className=" lg:text-justify md:text-justify text-left  ">
                        Digital tools bring new and unique approaches to design, allowing our team to embed intelligence into our proposals - both conceptually and technically. In the world of mass customisation, algorithmic design provides opportunities to explore and realise complex doubly curved surfaces, unique complex joints and thousands of unique pieces digitally, with the ability to easily translate the digital model to the physical world through digital fabrication techniques.
                    </p>
                    <br className='hidden lg:visible' />



                </div>


                <img alt="" className='h-full object-cover' src="\images\projects\Ravensthorpe\cover_image.jpg" />

            </div> */}




                    {/* <h1 className="font-semibold text-black  text-left pt-24 ">Our Team</h1>

                <div className="  grid grid-cols-1 lg:grid-cols-4 lg:gap-4   lg:mt-8 h-72">


                    <div className="bg-blue-300 flex flex-col">
                        <div className="bg-white flex-grow">

                        </div>
                        <div className="">
                            <p className="prose pl-4">
                                This is a Test name
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-300 ">

                    </div>

                    <div className="bg-blue-300 ">

                    </div>

                    <div className="bg-blue-300 ">

                    </div>



                </div> */}


                </div>
            </div>

            {/* <ValueStatement /> */}
  

        </div>
    )
}
export default AboutSection