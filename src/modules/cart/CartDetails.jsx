import React, { useState } from "react";
import { isNumeric } from "../../common/helpers";
import { Link } from "react-router-dom";
import Container from "../../common/components/Container";

export default function CartDetails() {
    // khai báo biến có trang thái mới là count
    const [count, setCount] = useState(1);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const onChange = (e) => {
        if (isNumeric(e.target.value)) setCount(e.target.value);
    };
    const decrease = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };



    return (
        <Container>
            <div>
                <div className="py-[100px] lg:flex ">
                    {/* cart */}
                    <div className=" pb-[40px lg:pr-[15px] lg:basis-4/6">
                        <table className="w-full border-b border-gray-300 ">
                            <thead className="text-h4 ">
                                <tr className="border-b border-gray-300 ">
                                    <th className="pb-[35px] text-left leading-9 font-normal font-['Libre_Baskerville']">
                                        Product
                                    </th>
                                    <th className="pb-[35px] text-center font-normal font-['Libre_Baskerville']">
                                        Quantity
                                    </th>
                                    <th className="pb-[35px] text-left font-normal font-['Libre_Baskerville']">
                                        Total
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 ">
                                <tr hidden={deleteProduct}>
                                    <td className="py-[35px] lg:flex">
                                        <div className="mr-[30px]">
                                            <img
                                                src="https://preview.colorlib.com/theme/florist/img/cart/cat-1.jpg.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="pt-[20px]">
                                            <h4 className=" text-h4 font-normal font-['Libre_Baskerville'] mb-[10px]">
                                                Cactus
                                            </h4>
                                            <span className="text-[20px] font-bold font-['Quicksand']">
                                                $19.00
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-[35px]  text-center ">
                                        <div className="">
                                            <button
                                                className="text-xl font-normal"
                                                onClick={decrease}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="w-[80px] text-center text-[20px] font-bold font-['Quicksand']"
                                                type="text"
                                                onChange={onChange}
                                                value={count}
                                            />
                                            <button className="text-xl" onClick={increase}>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-[35px] text-[20px] font-bold font-['Quicksand']">
                                        ${count * 19}.00
                                    </td>
                                    <td className="py-[35px]">

                                        <i
                                            className="cursor-pointer fa fa-times-circle text-[#f45d96] text-[20px]"
                                            onClick={() => setDeleteProduct(true)}
                                        ></i>
                                    </td>
                                </tr>

                                <tr hidden={deleteProduct}>
                                    <td className="py-[35px] lg:flex">
                                        <div className="mr-[30px]">
                                            <img
                                                src="https://preview.colorlib.com/theme/florist/img/cart/cat-2.jpg.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="pt-[20px]">
                                            <h4 className=" text-h4 font-normal font-['Libre_Baskerville'] mb-[10px]">
                                                Succulent plants
                                            </h4>
                                            <span className="text-[20px] font-bold font-['Quicksand']">
                                                $21.00
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-[35px]  text-center ">
                                        <div className="">
                                            <button
                                                className="text-xl font-normal"
                                                onClick={decrease}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="w-[80px] text-center text-[20px] font-bold font-['Quicksand']"
                                                type="text"
                                                onChange={onChange}
                                                value={count}
                                            />
                                            <button className="text-xl" onClick={increase}>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-[35px] text-[20px] font-bold font-['Quicksand']">
                                        ${count * 21}.00
                                    </td>
                                    <td className="py-[35px]">
                                        <i
                                            className="cursor-pointer fa fa-times-circle text-[#f45d96] text-[20px]"
                                            onClick={() => setDeleteProduct(true)}
                                        ></i>
                                    </td>
                                </tr>

                                <tr hidden={deleteProduct}>
                                    <td className="py-[35px] lg:flex">
                                        <div className="mr-[30px]">
                                            <img className="w-[100px] h-[100px]"
                                                src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-18.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="pt-[20px]">
                                            <h4 className=" text-h4 font-normal font-['Libre_Baskerville'] mb-[10px]">
                                                Funiture tree
                                            </h4>
                                            <span className="text-[20px] font-bold font-['Quicksand']">
                                                $27.00
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-[35px]  text-center ">
                                        <div className="">
                                            <button
                                                className="text-xl font-normal"
                                                onClick={decrease}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="w-[80px] text-center text-[20px] font-bold font-['Quicksand']"
                                                type="text"
                                                onChange={onChange}
                                                value={count}
                                            />
                                            <button className="text-xl" onClick={increase}>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-[35px] text-[20px] font-bold font-['Quicksand']">
                                        ${count * 27}.00
                                    </td>
                                    <td className="py-[35px]">
                                        <i
                                            className="cursor-pointer fa fa-times-circle text-[#f45d96] text-[20px]"
                                            onClick={() => setDeleteProduct(true)}
                                        ></i>
                                    </td>
                                </tr>

                                <tr hidden={deleteProduct}>
                                    <td className="py-[35px] lg:flex">
                                        <div className="mr-[30px]">
                                            <img className="w-[100px] h-[100px]"
                                                src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-22.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="pt-[20px]">
                                            <h4 className=" text-h4 font-normal font-['Libre_Baskerville'] mb-[10px]">
                                                Fresh Flower
                                            </h4>
                                            <span className="text-[20px] font-bold font-['Quicksand']">
                                                $25.00
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-[35px]  text-center ">
                                        <div className="">
                                            <button
                                                className="text-xl font-normal"
                                                onClick={decrease}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="w-[80px] text-center text-[20px] font-bold font-['Quicksand']"
                                                type="text"
                                                onChange={onChange}
                                                value={count}
                                            />
                                            <button className="text-xl" onClick={increase}>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-[35px] text-[20px] font-bold font-['Quicksand']">
                                        ${count * 25}.00
                                    </td>
                                    <td className="py-[35px]">
                                        <i
                                            className="cursor-pointer fa fa-times-circle text-[#f45d96] text-[20px]"
                                            onClick={() => setDeleteProduct(true)}
                                        ></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/*item */}
                        <div className="lg:flex  pt-[35px] font-['Quicksand'] font-bold text-base  justify-between  uppercase">
                            <div className="pb-[20px] lg:basis-5/12 ">
                                <Link to="/shop">
                                    <i className="fa-solid fa-arrow-rotate-left text-[#f45d96] pr-[5px]"></i>
                                    <span className=""> Continute shopping</span>
                                </Link>
                            </div>

                            <div className="flex lg:max-basis-7/12 justify-between ">
                                <div className="sm:mr-[65px] lg:mr-[15px]  ">
                                    <a href="#">
                                        <i className="fa-solid fa-trash-can text-[#f45d96] pr-[5px]" onClick={() => setDeleteProduct(true)}></i>
                                        <span> Clear shopping cart</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <i className="fa-solid fa-spinner text-[#f45d96] pr-[5px]"></i>
                                        <span> Update cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* pay */}
                    <div className="lg:basis-2/6">
                        {/* coupon */}
                        <div className=" p-[30px] mb-[50px] bg-[#f7f5fa]">
                            <div>
                                <p className="text-sm mb-[12px] font-['Quicksand'] font-normal">
                                    Enter coupon code. It will be applied at checkout.
                                </p>
                            </div>
                            <form className="relative" action="#">
                                <input
                                    className="h-[46px] w-full border border-gray-300 font-['Quicksand'] ::placeholder text-sm pl-[20px]  "
                                    type="text"
                                    placeholder=" Your code here"
                                />
                                <button
                                    className=" absolute right-0 top-0 text-white bg-black px-[30px] lg:px-3.5 uppercase  font-['Quicksand'] tracking-[2px] test-base font-bold h-[46px] "
                                    type="submit"
                                >
                                    APPLY
                                </button>
                            </form>
                        </div>

                        {/* cart total */}
                        <div className="p-[30px] bg-[#f7f5fa]">
                            <h4 className="mb-[36px] text-h4 font-['Libre_Baskerville'] ">
                                Cart Total
                            </h4>
                            <ul className="mb-[28px] font-['Quicksand']">
                                <li className="text-[#888888] text-base leading-[36px]">
                                    Subtotal
                                    <span className="text-black font-bold float-right">
                                        $217.00
                                    </span>
                                </li>

                                <li className="text-[#888888] text-base">
                                    Subtotal
                                    <span className="text-[#f45d96] font-bold float-right">
                                        $217.00
                                    </span>
                                </li>
                            </ul>
                            <Link
                                to="/cartDetails/checkout"
                                className="block h-[46px] text-center w-full text-white bg-black  uppercase  font-['Quicksand'] tracking-[2px] lg:tracking-normal test-base font-bold   px-[20px] py-[14px] "
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
