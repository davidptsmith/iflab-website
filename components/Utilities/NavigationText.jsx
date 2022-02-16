import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";


const NavigationText = ({ text, url }) => {


    return (
        <>
            <Link href={url} passHref={true}>
                <div className="border-t-2 cursor-pointer">
                    <h3>
                        {text}
                        <AiOutlineDoubleRight
                            className="  p-1 text-2xl text-gray-600 inline-block cursor-pointer"
                        />
                    </h3>
                </div>
            </Link>


        </>

    )
}

export default NavigationText
