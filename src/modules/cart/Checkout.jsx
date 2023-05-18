import React from "react";
import Container from "../../common/components/Container";
import InputBox from "./InputBox";

export default function Checkout() {
  return (
    <div className="py-[100px] 2xl:m-auto">
      <Container>
        <div className="lg:flex">
          <div className="lg:basis-2/3 pr-[15px]">
            {/* Contact information */}
            <div className="mb-9 font-[Quicksand] text-[#444444]">
              <div className="md:flex md:justify-between md:items-center">
                <h4 className="font-['Libre_Baskerville'] text-[26px] text-[#111111] font-normal mb-5">
                  Contact information
                </h4>
                <h6 className="pb-5 font-['Libre_Baskerville'] ">
                  Already have an account?
                  <a href="" className="text-[#f45d96]">
                    Login
                  </a>
                </h6>
              </div>

              <input
                className="w-full h-[46px] pl-5 mb-[15px] p-[2px] border-solid border-[1px] border-[#e1e1e1]"
                type="text"
                placeholder="Email or mobile phone number"
              />
              <p className="font-[Quicksand] text-[#444444]">
                <input type="checkbox" className="accent-[#f45d96] mr-2 " />
                Keep me up to dateon news and exclusive offers
              </p>
            </div>

            {/* Shipping address */}
            <div>
              <h4 className="font-['Libre_Baskerville'] text-[26px] text-[#111111] font-normal mb-5">
                Shipping address
              </h4>
              <div className="font-[Quicksand] text-[#444444]">
                <InputBox label={"First name"} />
                <InputBox label={"Last name"} />
                <InputBox label={"Contact"} />
                <InputBox label={"Address"} placeholder={"Street address"}>
                  {
                    <input
                      className="w-full h-[46px] pl-5 mb-[15px] p-[2px] border-solid border-[1px] border-[#e1e1e1]"
                      type="text"
                      placeholder="Apartment, suite, etc (optinal)"
                    />
                  }
                </InputBox>
                <InputBox label={"Town city"} />
                <InputBox label={"Country/State"} />
                <InputBox label={"Postcode/Zip"} />
                <InputBox
                  label={"Order note"}
                  placeholder={
                    "Note about your order, e.g, special note for delivery"
                  }
                />
                <p>
                  <input type="checkbox" className="accent-[#f45d96] mr-2" />
                  Save this information for next time
                </p>
              </div>
            </div>
          </div>

          {/* Checkout box */}
          <div className="lg:basis-1/3 lg:pl-[15px] mt-9">
            {/* coupon */}
            <div className=" p-[30px] bg-[#f7f5fa]">
              <div>
                <h4 className="pr-[15px] mb-9 text-h4 font-normal">
                  Your order
                </h4>
                <p className="text-sm mb-[12px] font-['Quicksand'] font-normal">
                  Enter coupon code. It will be applied at checkout.
                </p>
              </div>
              <form className="relative" action="#">
                <input
                  className="h-[46px] w-full border border-gray-300 font-['Quicksand'] ::placeholder text-sm pl-[20px] "
                  type="text"
                  placeholder=" Your code here"
                />
                <button
                  className=" absolute right-0 top-0 text-white bg-black px-[30px] lg:px-3.5 uppercase  font-['Quicksand'] tracking-[2px]  test-base font-bold h-[46px]"
                  type="submit"
                >
                  APPLY
                </button>
              </form>
            </div>

            {/* cart total */}
            <div className="p-[30px] bg-[#f7f5fa]">
              <h4 className="mb-[36px] text-h4 font-['Libre_Baskerville'] tracking-widest ">
                Product
              </h4>
              <ul className="mb-[28px] font-['Quicksand'] border-solid border-y-[1px] border-[#e1e1e1] py-5">
                <li className="text-[#888888] text-base leading-[36px]">
                  Subtotal
                  <span className="text-black font-bold float-right">
                    $217.00
                  </span>
                </li>

                <li className="text-[#888888] text-base">
                  Total
                  <span className="text-[#f45d96] font-bold float-right">
                    $217.00
                  </span>
                </li>
              </ul>
              <div className="font-['Quicksand'] text-base font-normal text-[#444444] mb-8">
                <p className=" cursor-pointer mb-4.5 ">
                  <input type="checkbox" className="accent-[#f45d96] mr-2" />
                  Cheque payment
                </p>
                <p className=" cursor-pointer mb-4.5 ">
                  <input type="checkbox" className="accent-[#f45d96] mr-2" />
                  PayPal
                </p>
              </div>

              <a
                className="block h-[46px] text-center w-full text-white bg-black  uppercase  font-['Quicksand'] tracking-[2px] lg:tracking-normal test-base font-bold px-[20px] py-[14px] "
                href="#"
              >
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
