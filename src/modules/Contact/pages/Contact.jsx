import React from "react";
import Container from "../../../common/components/Container";
import FooterHeading from "../../../common/layout/Footer/FooterHeading";

export default function Contact() {
  return (
    <div>
      <Container>
        <div>
          <div className="mb-[30px] lg:mb-0 md:basis-2/3 lg:basis-1/3 md:pr-[15px] lg:pl-[15px] ">
            <div className="lg:pl-5 xl:pl-[60px] lg:py-[50px]">
              <FooterHeading
                headingText="Get in touch"
                headingFontFamily={`font-[Libre Baskerville]`}
                headingColor={`text-[#111111]`}
              />
              <ul className="font-[Quicksand] text-[15px] leading-9">
                <li className="flex">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>69 North Cleveland Street, Memphis,USA.</p>
                </li>
                <li className="flex">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 8111 9210 - (012) 1111 6868</p>
                </li>
                <li className="flex">
                  <i class="fa-solid fa-envelope"></i>
                  <p>Florisr@supportthem.com</p>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
}
