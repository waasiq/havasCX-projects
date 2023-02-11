import { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    text: string
}

const Button: NextPage<Props> = ({ text }) => {
    const lowerText  = text.toLowerCase();
    return (    
        <Link href={`/${lowerText}`}>
            <button className="bg-white hover:bg-slate-400 hover:scale-110  mx-3 border-2 border-black rounded-md duration-150 font-bold py-5 px-8">
                {text}
            </button>
        </Link>
    );
}

export default Button;