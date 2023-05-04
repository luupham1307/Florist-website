// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";

const bannerOptions = [
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slide1.jpg.webp",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Slides/slide2.jpg.webp",
];
export default function Slide() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="banner-swiper"
            >

                {bannerOptions.map((item) => (
                    <SwiperSlide key={item}>
                        <div className="relative">
                            <img className="max-w-full h-[700px] object-cover bg-center" src={item} alt="" />
                            {/* text */}
                            <div className=" max-w-[1410px] h-full px-15px mx-auto ">
                                <div className="absolute flex flex-wrap  top-0 py-24  mx-[15px]">
                                    <div className="px-[15px] basis-1/2">
                                        <span className="font-[Quicksand] mb-5 text-black text-left text-base font-bold tracking-[4px] uppercase ">
                                            Fresh Flower & Gift Shop
                                        </span>
                                        <h2 className="font-[Hello Santtiny] text-[42px] text-black mb-[42px] ">
                                            Making beautiful flowers a part of your life.
                                        </h2>
                                        <button className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-[15px] tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                                            Shop now
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    );
}