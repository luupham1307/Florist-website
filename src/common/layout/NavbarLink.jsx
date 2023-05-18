import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLink() {
    return (
        <div>
            <ul className="flex flex-col lg:flex-row gap-4 font-medium  xl:space-x-8  text-base uppercase ">
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
                    <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f45d96] md:p-0  ">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
