import Link from "next/dist/client/link"
const ParallaxImageBreak = ({ imageNumber }) => {


    switch (imageNumber) {
        case 1:
            return (
                <div className="w-screen">
                    <section
                        className="ParallaxImage custom-img "
                    >
                        {/* <div className="p-5 text-2xl text-white bg-gray-600 bg-opacity-50 rounded-xl">
                        Parralax inline
                    </div> */}
                    </section>
                </div>
            )
        case 2:
            return (
                <div className="w-screen">

                    <section
                        className="ParallaxImage custom-img2"
                    >
                        {/* <div className="p-5 text-2xl text-white bg-gray-600 bg-opacity-50 rounded-xl">
                            Parralax inline
                        </div> */}
                    </section>
                </div>

            )
        case 3:
            return (
                <div className="w-screen">

                    <section
                        className="ParallaxImage custom-img3"
                    >
                        {/* <div className="p-5 text-2xl text-white bg-gray-600 bg-opacity-50 rounded-xl">
                            Parralax inline
                        </div> */}
                    </section>
                </div>

            )
        case 4:
            return (
                <div className="w-screen">

                    <section
                        className="ParallaxImage custom-img4"
                    >
                        {/* <div className="p-5 text-2xl text-white bg-gray-600 bg-opacity-50 rounded-xl">
                                Parralax inline
                            </div> */}
                    </section>
                </div>

            )

        default:
            return (
                <div className="w-screen">

                    <section
                        className="ParallaxImage custom-img"
                    >
                        <div className="p-5 text-2xl text-white bg-gray-600 bg-opacity-50 rounded-xl">
                            Parralax inline
                        </div>
                    </section>
                </div>

            )
            break;
    }



}

export default ParallaxImageBreak