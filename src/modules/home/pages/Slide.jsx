// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Container from "../../../common/components/Container";
import ContainerFuild from "../../../common/components/ContainerFuild";


const bannerOptions = [
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slide1.jpg.webp",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slide2.jpg.webp",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slice22.avif"

];
export default function Slide() {
    return (
        <ContainerFuild>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="banner-swiper"
                >
                    {bannerOptions.map((item) => (

                        <SwiperSlide className="relative" key={item}>

                            <img className="w-full h-full object-cover bg-left" src={item} alt="" />

                            {/* text */}
                            <div className="absolute w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1410px] mx-auto px-[15px]  ">
                                <div className=" text-left  py-24 lg:flex lg:flex-row ">
                                    <div className="px-[15px] basis-1/2">
                                        <span className=" block font-[Quicksand] pb-3 text-black text-left text-base font-bold tracking-[4px] uppercase ">
                                            Fresh Flower & Gift Shop
                                        </span>
                                        <h2 className=" text-[42px] text-black mb-[28px] ">
                                            Making beautiful flowers a part of your life.
                                        </h2>
                                        <button className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-[15px] tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                                            Shop now
                                        </button>
                                    </div>
                                </div>



                            </div>

                        </SwiperSlide>
                    ))}


                </Swiper>
            </>
        </ContainerFuild>
    );
}
