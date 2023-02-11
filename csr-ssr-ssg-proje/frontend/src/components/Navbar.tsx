import { NextPage } from "next";

interface NavbarProps {
    heading: string;
}
const Navbar: NextPage<NavbarProps>  = ({ heading }) => {
    return (
        <header className="h-20 grid grid-cols-3 place-items-center mb-12 border-b-2 px-2 shadow-md">
            <a className="py-2 px-6 rounded-md border-2 border-black text-black text-xl shadow-md transition-all duration-150 hover:scale-110 hover:shadow-lg hover:bg-sky-900/40" href="/">
                Go Back
            </a>
            <h1 className="text-4xl font-bold">{heading}</h1>
        </header>
    )
}

export default Navbar