import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import Overlay from "../components/Overlay";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [down, setDown] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        // navbar
        <Container>
            <nav className=" font-['Quicksand']">
                <div className=" flex  items-center justify-between py-8 ">
                    {/* logo */}

                    <div className=" flex items-center justify-between  text-[#f45d96]  ">
                        <Link to="/">
                            <img src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Logo/Florist%20logo.webp" className=" " alt="Logo" />
                        </Link>
                    </div>

                    {/* home... */}
                    <div className="items-center justify-between hidden lg:flex  ">

                        <NavbarLink />

                    </div>

                    <div className="flex ">
                        {/* icon */}
                        <div className="hidden lg:flex lg:gap-12 text-[#f45d96] text-[20px] ">

                            <Link to="/shop" >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>

                            <a href="">
                                <i className="fa-sharp fa-solid fa-heart"></i>
                            </a>
                            {/* giỏ hàng */}
                            <Link to="/cartDetails">
                                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            </Link>
                        </div>

                        {/* button */}

                        <div className="block min-[992px]:hidden ">
                            <button className="  flex top-0 left-0 items-center p-2 border rounded text-black-500 border-black-500 hover:border-black" onClick={handleOpen}>

                                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                            </button>

                            {/* Dashboard*/}
                            {open && (
                                <div hidden={deleteProduct} >
                                    <Overlay />
                                    <div className=" fixed z-[60] top-0 bottom-0 left-0 w-[300px] h-[100%] bg-white px-[20px] py-[32px] transition-all duration-500 text-left">
                                        <div className="pb-[20px]">
                                            <img src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Logo/Florist%20logo.webp" className=" " alt="Logo" />

                                        </div>

                                        <div className="mb-[20px] text-[20px] flex justify-between  ">
                                            <div className="flex justify-between basis-1/2  text-[#f45d96]">
                                                <Link to="/shop" >
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </Link>

                                                <a href="">
                                                    <i className="fa-sharp fa-solid fa-heart "></i>
                                                </a>

                                                <Link to="/cartDetails">
                                                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                                </Link>

                                            </div>

                                            <a href="">
                                                <i
                                                    className="fa fa-times-circle text-[#f45d96] text-[20px]"
                                                    onClick={() => setDeleteProduct(true)}
                                                ></i>
                                            </a>

                                        </div>
                                        <NavbarLink />

                                    </div>
                                </div>

                            )}

                        </div>




                    </div>
                </div>
            </nav>
        </Container>







    )
}


