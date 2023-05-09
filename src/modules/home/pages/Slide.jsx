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

                        <SwiperSlide className="relative" key={item}>

                            <img className="w-full h-full object-cover bg-left" src={item} alt="" />

                            {/* text */}
                            <div className="absolute max-w-[1410px] h-full  mx-auto  flex flex-col justify-center flex-wrap text-left">
                                <Container>
                                    <div className="   py-24  ">
                                        <div className="px-[15px] basis-1/2">
                                            <span className="font-[Quicksand] pb-5 text-black text-left text-base font-bold tracking-[4px] uppercase ">
                                                Fresh Flower & Gift Shop
                                            </span>
                                            <h2 className="font-[Hello Santtiny] text-[42px] text-black mb-[28px] ">
                                                Making beautiful flowers a part of your life.
                                            </h2>
                                            <button className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-[15px] tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                                                Shop now
                                            </button>

                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </>
        </ContainerFuild>
    );
}
