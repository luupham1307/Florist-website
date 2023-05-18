import { Link } from "react-router-dom";
import ContainerFuild from "../../../common/components/ContainerFuild";

export default function CallToAction() {
  return (
    <div>
      <ContainerFuild>
        <div className="relative">
          {/* Image */}

          <img
            className="w-full h-[502px] object-cover bg-center"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/call-bg.jpg"
            alt=""
          />
          {/* Text */}
          <div className=" max-w-[1170px] h-full mx-auto ">
            <div className="absolute flex flex-wrap  top-0 py-24  mx-[15px]">
              <div className="px-[15px] lg:basis-1/2">
                <span className="font-[Quicksand] mb-5 text-white text-left text-base font-bold tracking-[4px] uppercase ">
                  Custom Flower
                </span>
                <h2 className="text-[42px] text-[#ffffff] mb-[30px]  sm:mb-[42px] ">
                  Let out flowers make your party more perfect
                </h2>
                <div className="sm:flex">
                  <div className="mb-8">
                    <Link to="/shop" className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-sm leading-5 tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                      Order now
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact" className="font-[Quicksand] bg-[#ffffff] text-[#f45d96] text-sm leading-5 tracking-[2px] font-bold px-[30px] py-[14px] sm:ml-4 uppercase rounded-full ">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerFuild>
    </div>
  );
}
