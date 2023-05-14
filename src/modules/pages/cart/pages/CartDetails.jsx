import React, { useState } from 'react'



export default function CartDetails() {
    let [count, setCount] = useState(0);
    const onChange = (e) => {


        console.log(e)
        setCount(count + 1)
    }


    return (

        <div>
            <div className='py-[100px]'>

                {/* cart */}
                <div className=''>
                    <table className="w-full border-collapse">
                        <thead className=" gray-200">
                            <tr className='border-b-indigo-900'>
                                <th className="py-2 px-4 text-left">Product</th>
                                <th className="py-2 px-4 text-left">Quantity</th>
                                <th className="py-2 px-4 text-left">Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-2 px-4">
                                    <div>
                                        <img src="https://preview.colorlib.com/theme/florist/img/cart/cat-1.jpg.webp" alt="" />
                                    </div>
                                    <div>
                                        <h4>Cactus Gym</h4>
                                        <span>$21.00</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4">
                                    <div>
                                        <span>-</span>
                                        <input type="text" onChange={onChange} value={useState} />
                                        <span>+</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4">$21.00</td>
                                <td>
                                    <i className='fa fa-times-circle'></i>
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 px-4">
                                    <div>
                                        <img src="https://preview.colorlib.com/theme/florist/img/cart/cat-1.jpg.webp" alt="" />
                                    </div>
                                    <div>
                                        <h4>Cactus Gym</h4>
                                        <span>$21.00</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4">
                                    <div>
                                        <span>-</span>
                                        <input type="text" onChange={onChange} value={useState} />
                                        <span>+</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4">$21.00</td>
                                <td>
                                    <i className='fa fa-times-circle'></i>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    {/*item */}
                    <div>

                        <div>
                            <a href="#">
                                <i className="fa-solid fa-arrow-rotate-left"></i>
                                <span> Continute shopping</span>
                            </a>
                        </div>

                        <div>
                            <div>
                                <a href="#">
                                    <i className="fa-solid fa-trash-can"></i>
                                    <span> Clear shopping cart</span>
                                </a>

                            </div>
                            <div>
                                <a href="#">
                                    <i className="fa-solid fa-spinner"></i>
                                    <span>  Update cartt</span>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

                {/* pay */}
                <div>

                    {/* coupon */}
                    <div>
                        <p>Enter coupon code. It will be applied at checkout.</p>
                    </div>
                    <form action="#">
                        <input type="text" />
                    </form>

                    {/* cart total */}

                </div>
            </div>
        </div>
    )
}
