import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";

export default function Navbar() {
    return (
        // navbar
        <Container>
            <nav className=" font-['Quicksand']">
                <div className=" flex  items-center justify-between py-8 ">
                    {/* logo */}

                    <div className=" flex items-center justify-between  text-[#f45d96]  ">
                        <img src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Logo/Florist%20logo.webp" className=" " alt="Logo" />
                    </div>

                    {/* home... */}
                    <div className="items-center justify-between hidden lg:flex ">
                        <ul className="flex flex-row gap-4 font-medium  xl:space-x-8   text-base uppercase ">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-black md:bg-transparent md:hover:text-[#f45d96]  md:p-0 " aria-current="page">Home</Link>
                            </li>

                            <li>
                                <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96]  md:p-0  ">About</Link>
                            </li>

                            <li>
                                <Link to="/services" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Services</Link>
                            </li>

                            <li>
                                <Link to="/shop" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Shop</Link>
                            </li>

                            <li>
                                <Link to="/blog" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Blog</Link>
                            </li>

                            <li>
                                <Link to="/pages" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Pages</Link>
                            </li>

                            <li>
                                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex ">
                        {/* icon */}
                        <div className="hidden lg:flex lg:gap-12 text-[#f45d96] ">
                            <a href="">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>

                            <a href="">
                                <i className="fa-sharp fa-solid fa-heart"></i>
                            </a>

                            <a href="">
                                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>

                        <div className="block min-[992px]:hidden">
                            <button className="flex items-center p-2 border rounded text-black-500 border-black-500 hover:border-black">
                                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                            </button>
                        </div>



                    </div>
                </div>
            </nav>
        </Container>







    )
}


