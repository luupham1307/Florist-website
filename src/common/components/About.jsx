import { Link } from "react-router-dom";
import Container from "./Container";

// met

export default function About({ isAutoPlay }) {
    return (
        <Container>
            <div className="lg:flex lg:flex-col py-[70px]  ">
                <div className=" lg:flex  lg:flex-row   ">
                    <div className="mb-11 basis-1/3  lg:pr-[15px] ">
                        <span className="block text-[#f45d96] font-[Quicksand] font-bold tracking-[4px] text-base pb-2 "> ABOUT US</span>
                        <h2 className="text-h2 font-['Libre_Baskerville']">We provide all kinds of fresh flower services</h2>
                    </div>
                    <div className="mb-11 basis-2/3 lg:ml-[80px] lg:px-[15px]">
                        <p className="text-lg  font-[Quicksand] ">For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can
                            be dried and incorporated into late fall and winter floral arrangements has been a
                            game-changer. During her growing season, this farmer-florist relies on a vivid palette of
                            annuals, perennials and ornamental grasses to supply her studio.</p>
                    </div>
                </div>

                {/* img +video */}
                <div className=" lg:flex lg:flex-row lg:relative ">
                    <div className="relative lg:basis-1/2" >
                        {/* <img className=" h-[535px] sm:w-full md:w-[690px] lg:w-full xl:w-[753px] 2xl:w-[793px] object-cover mb-[30px] " src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/About/about-video.jpg" alt=" about"



                        /> */}

                        <video
                            className=" h-[535px] w-full md:w-[690px] lg:w-full xl:w-[753px] 2xl:w-[793px] object-cover mb-[30px]"
                            controls autoPlay={isAutoPlay ? true : false}

                        >
                            <source
                                src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/video/Download.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>



                    </div>

                    <div className=" lg:absolute  text-left lg:w-[50%] lg:translate-x-[-60%] lg:translate-y-[-10%] lg:left-[75%]  lg:basis-1/2 lg:py-[105px] lg:px-[80px]  mb-[30px] py-[50px] px-[70px] shadow-[0_10px_21px_0px_rgba(99,134,137,0.16)] bg-white ">
                        <div>
                            <span className="block text-[#f45d96] font-[Quicksand] font-bold tracking-[4px] text-base pb-2 uppercase">
                                Slow Flowers’ Floral Insights
                            </span>
                            <h2 className="text-h3 font-['Libre_Baskerville'] pb-[26px]">
                                Dried flowers are having a renaissance
                            </h2>
                            <p className="text-lg  font-[Quicksand] mb-[30px]">This awareness has been stimulated by sustainable sourcing practices and the desire on the
                                part of North American flower growers to “extend the season” beyond the last frost.</p>
                            <Link to="/contact" className="font-[Quicksand] bg-[#f45d96] text-[#ffffff] text-sm leading-5 tracking-[2px] font-bold px-[30px] py-[14px] uppercase rounded-full ">
                                contact us
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}