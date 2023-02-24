import DropDown from "./Dropdown"

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Accessibility</span>
                <ul className="flex flex-col p-4 mt-4 border  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                    <li>
                    <a href="#" aria-label="Home" className="inline-flex justify-center px-4 py-2" >
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="/" aria-label="About" className="inline-flex justify-center px-4 py-2" >
                        About
                    </a>
                    </li>
                    <li>
                        <DropDown />
                    </li>
                    <li>
                        <DropDown />
                    </li>
                    <li>
                        <DropDown  />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar