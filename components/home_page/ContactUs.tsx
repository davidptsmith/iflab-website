import Link from "next/dist/client/link"
const ContactUs = () => {
    return (
        <div>
            {/* Contact Section*/}
            <div className=" flex flex-row  flex-nowrap	 mx-auto  grid-cols-2 mt-32 w-2/3">

                <div className="w-2/3">

                    <h1 className="text-2xl italic" >
                        Contact Us
                    </h1>
                    <p className="text-gray-600 font-light text-justify p-4 ">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eius? Consequatur repellendus velit minima magnam optio est voluptatum fugit repellat at temporibus blanditiis fuga sed, quasi nisi nulla earum cumque. Laboriosam voluptatem obcaecati quibusdam sint quidem numquam maxime, magni eaque.                    </p>
                </div>
                <div className="w-2/3">

                    <img className=" object-cover  inset-y-0 right-0 "
                        src="https://firebasestorage.googleapis.com/v0/b/iflab-website-test1.appspot.com/o/Redcliffe%2F2021-03-29%2015_21_13-200322%20Key%20Stakeholder%20Meeting%203%20Presentation_Final%20Draft.pdf%20-%20Adobe%20Acrobat%20Pr.png?alt=media&token=43f32fe4-2c07-469f-b0d5-10527f99e6ec"
                        alt="Redecliffe" />

                </div>
            </div>
        </div>
    )
}

export default ContactUs