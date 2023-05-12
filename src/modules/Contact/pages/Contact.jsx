import React from "react";
import Container from "../../../common/components/Container";
import FooterHeading from "../../../common/layout/Footer/FooterHeading";
import SendButton from "../../../common/components/SendButton";

export default function Contact() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Container>
        <div>
          <div className=" pb-16 pt-24 lg:mb-0 md:basis-2/3 lg:basis-1/3">
            <div className="md:flex md:flex-wrap lg:py-[50px]">
              <div className="md:basis-1/2 md:px-2 lg:basis-1/3 mb-[30px] ">
                <FooterHeading
                  headingText="Get in touch"
                  headingFontFamily={`font-[Libre Baskerville]`}
                  headingColor={`text-[#111111]`}
                  fontSize={`text-[40px]`}
                />
                <p className="font-[Quicksand] text-base mb-2.5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  et dolore.
                </p>
                <ul className="font-[Quicksand] text-[15px] leading-9">
                  <li className="flex items-center">
                    <i className="mr-4 text-[#f45d96] fa-solid fa-location-dot"></i>
                    <p>69 North Cleveland Street, Memphis,USA.</p>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-4 text-[#f45d96] fa-solid fa-phone"></i>
                    <p>(123) 8111 9210 - (012) 1111 6868</p>
                  </li>
                  <li className="flex items-center">
                    <i className="mr-4 text-[#f45d96] fa-solid fa-envelope"></i>
                    <p>Florisr@supportthem.com</p>
                  </li>
                </ul>
              </div>

              <div className="md:basis-1/2 md:px-2 lg:basis-1/3">
                <FooterHeading
                  headingText="Contact us"
                  headingFontFamily={`font-['Libre_Baskerville']`}
                  headingColor={`text-[#111111]`}
                  fontSize={`text-[40px]`}
                />

                <form className="font-[Quicksand] text-base" action="">
                  <input
                    className="w-full h-12 mb-6 pl-4 py-0.5 pr-0.5 border-solid border-[1px] border-[#e1e1e1] text-[#888888]"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="w-full h-24 mb-6 pl-4 py-0.5 pr-0.5 border-solid border-[1px] border-[#e1e1e1] text-[#888888]"
                    type="text"
                    placeholder="Message"
                  />
                </form>
                <SendButton />
              </div>

              {/* Map */}
              <a className="w-full h-[450px] lg:h-[300px] md:py-4 md:px-3 lg:basis-1/3 lg:py-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62709.889589435!2d106.6129552477456!3d10.783093604454857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe4bb8d3f35%3A0xfaeb272263ce2874!2sClemence%20Flower%20%26%20Gift%20Shop!5e0!3m2!1svi!2s!4v1683876993205!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
