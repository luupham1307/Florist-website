import React from 'react'
import Container from '../../../common/components/Container';


export default function Out_Services() {
    let arrServices = [
        {
            imgUrl:
                "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-1.png.webp",
            heading: "Customer order",
            description:
                "Flower help you perfectly express how important your significant",
            price: "From $60 - $300",
        },
        {
            imgUrl:
                "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-2.png.webp",
            heading: "Event decoration",
            description:
                "Flower help you perfectly express how important your significant",
            price: "From $100 - $300",
        },
        {
            imgUrl:
                "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/services-3.png.webp",
            heading: "Green landscape",
            description:
                "Flower help you perfectly express how important your significant",
            price: "From $150 - $300",
        },
    ];
    return (
        <Container>
            <div className='text-center mb-[75px]'>
                <span className="font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] pb-2 ">
                    Our services
                </span>
                <h2 className="font-[Libre Baskerville] text-h2 leading-[58px] text-[#111111] font-normal ">
                    Florist’s services
                </h2>


                <div className="sm:flex sm:flex-wrap  mt-14 lg:pt-[35px] lg:pr-[15px] ">
                    {arrServices.map((item, index) => {
                        return (
                            <div key={index} className='flex sm:basis-1/2 lg:basis-1/3 px-2' >
                                <div className=' pr-3  relative mb-[75px] px-2.5 lg:px-10 xl:px-[75px] pb-[30px] xl:pb-[35px] pt-[60px] text-center border-solid border-[0.5px] border-[#f45d96] border-opacity-20  active:border-[#f45d96]'>

                                    <div className="flex-  absolute top-0 left-1/2 -translate-y-[50%] -translate-x-[50%] max-w-[100px] h-[70px] z-1 bg-white px-5 mx-auto">
                                        <img className="w-full h-full " src={item.imgUrl} alt="" />
                                    </div>

                                    <h4 className="flex-  font-[Libre Baskerville] text-h4 text-[#111111] font-normal mb-[15px]">
                                        {item.heading}
                                    </h4>
                                    <p className="flex-  font-[Quicksand] text-base text-[#444444] font-normal mx-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        );
                    })}
                </div>


            </div>
        </Container>

    )
}
