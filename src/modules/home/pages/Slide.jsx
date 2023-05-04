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
                    <SwiperSlide key={item}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
