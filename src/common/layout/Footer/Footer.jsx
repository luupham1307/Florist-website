import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "../../container/Container";
import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="pt-7 text-[#444444]">
      <Container>
        {/* Footer top */}
        <div className="font-[Quicksand] pb-7 border-b-solid border-b-[1px] border-[#eaeaea]">
          <div className="mb-7">
            <img
              src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Logo/Florist%20logo.webp"
              alt="Logo"
            />
          </div>
          <p className="mb-7">
            The floristry business has a significant market in the corporate and
            social event world, as flowers
          </p>
          <div className="flex ">
            <a href="">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer option */}
        <div className="sm:pt-[50px] grid grid-cols-1 border-b-solid border-b-[1px] border-[#eaeaea]">
          {/* Footer link */}
          <div>
            <div className="grid grid-cols-1 sm:mb-[30px]">
              <FooterHeading headingText="Company" />
              <FooterLink linkItem={["About Us", "Service", "Contact Us"]} />
            </div>
            <div className="grid grid-cols-1 sm:mb-[30px]">
              <FooterHeading headingText="Account" />
              <FooterLink linkItem={["My cart", "Wisslist", "Log/Register"]} />
            </div>
          </div>

          {/* Newletter */}
          <div className="sm:mb-[30px] ">
            <FooterHeading headingText="Newletter" />
            <div className="font-[Quicksand]">
              <p className="sm:text-base sm:leading-7 sm:font-normal sm:mb-[15px]">
                Subcribe to our newsletter to get more free tips. No Spam,
                Promise.
              </p>
              <form
                className=" sm:border-solid sm:border-b-[2px] sm:border-[#111111] px-[2px] py-[1px] sm:relative w-full h-9"
                action=""
              >
                <input type="text" placeholder="Email" />
                <button className="sm:px-[6px] sm:py-[1px] sm:absolute sm:right-0 sm:font-bold sm:uppercase">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Get in touch */}
          <div className="sm:mb-[30px]">
            <FooterHeading headingText="Get in touch" />
            <ul className="font-[Quicksand] sm:text-[15px] sm:leading-9">
              <li>69 North Cleveland Street, Memphis,USA.</li>
              <li>(123) 8111 9210 - (012) 1111 6868</li>
              <li>Florisr@supportthem.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="font-[Quicksand] sm:py-[22px]">
          <p className="text-center">
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <span>
              <i className="text-[#f45d96] fa-solid fa-heart"></i>
            </span>
            by
            <span>
              <a className="text-[#f45d96]" href="https://colorlib.com">
                Colorlib
              </a>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
