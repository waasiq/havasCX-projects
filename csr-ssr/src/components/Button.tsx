import { NextPage } from "next";
import Link from "next/link";

interface Props {
    text: string;
}

const Button: NextPage<Props> = ({ text }) => {

    const lowerText  = text.toLowerCase();
    return (
        // <Link href={text}>
        <Link href={lowerText} className="border-black border-4 py-5 px-5 rounded">
                {/* {text} */}  
                {text}
        </Link>
        // </button>
        
    );
}

export default Button;