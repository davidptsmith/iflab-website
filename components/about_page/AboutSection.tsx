const AboutSection = () => {
    return (
<div className='w-4/6 md:w-2/3 lg:mt-14 mt-8  mx-auto'> 
  <div className='prose max-w-none '>


            <h1 className="font-semibold text-black  text-left ">About if/Lab</h1>

            <div className="  grid grid-cols-1 lg:grid-cols-2 lg:gap-12   lg:mt-8 ">

                <div className=" lg:text-justify md:text-justify text-left  ">

                    <p className=" lg:text-justify md:text-justify text-left  ">
                        If/LAB is a multidisciplinary design and consultancy company with a focus on the use of software for the purposes of design, manufacture and building. if/LAB currently focuses on art and architecture, and aim to continually be at the forefront of innovation.
                    </p>
                    <br className='hidden lg:visible' />
                    <p>
                        We see artwork as an opportunity to develop our computational design and digital fabrication research practices. Public artworks are an ideal scale for research and development.
                    </p>
                    <br className='hidden lg:visible' />
                    <p>
                        If/LAB’s goals are to work across project types of all scales to create innovative spaces that transform experience. Our core values reflect a strong commitment to innovation and collaboration.
                    </p>
                    <p className=" lg:text-justify md:text-justify text-left  ">
                        We are a young, innovative office intent on creating transformative spaces, whilst being committed towards sustainable development, and always seeking to improve the working and living conditions of people with our design solutions.
                    </p>
                    <br className='hidden lg:visible' />

                </div>
                <div className="overflow-hidden   w-full h-full">

                    <img alt="" className='h-full object-cover' src="\images\projects\Anemoi\cover_image.jpg" />

                </div>
            </div>

            <h1 className="font-semibold text-black  text-left pt-24 ">Our Approach</h1>

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

            </div>




                <h1 className="font-semibold text-black  text-left pt-24 ">Our Team</h1>

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



</div>


                </div>
                </div>
            )
}
            export default AboutSection