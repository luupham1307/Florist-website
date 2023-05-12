import Container from "../../../common/components/Container";
import Network from "../../../common/components/Network";


let imgTeam = [
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/My%20Team/IMG_9372.jpg",
        name: "ba con báo",
        position: "nhân viên",
    },
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/My%20Team/Screenshot%202023-05-12%20at%2014.31.25.png",
        name: "Phương Thảo Điền",
        position: "bảo vệ",
    },

    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/My%20Team/Screenshot%202023-05-12%20at%2014.32.11.png",
        name: "Phương Thảo Điền",
        position: "CEO",
    },
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/My%20Team/ong%20chua",
        name: "ong chúa",
        position: "bảo vệ",

    }

]

export default function MyTeam() {
    return (

        <Container>
            <div className="pt-[100px] pb-[50px]">
                {/* heading */}

                <div className="md:flex md:justify-between">
                    {/*  heading */}
                    <div className="pb-[45px] md:pl-[15px]">
                        <span className="font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] mb-2 ">
                            Our Team Member
                        </span>
                        <h2 className="font-[Libre Baskerville] text-[42px] leading-[58px] text-[#111111] font-normal ">
                            Flower Experts
                        </h2>
                    </div>
                    {/* button */}
                    <div>
                        <button className="font-[Quicksand] border-solid border-[#f45d96] border-[2px] rounded-full px-[30px] py-3 mb-[45px] text-[15px]  text-[#111111] font-bold tracking-[2px] uppercase md:justify-end ">
                            Meet our team
                        </button>
                    </div>
                </div>

                {/* content */}
                <div className="  mb-[50px] md:flex md:flex-wrap ">{imgTeam.map((item, i) => {

                    return (

                        <div key={i} className="md:mx-[15px] shadow-xl md:basis-1/2 xl:basis-1/4">

                            <div>
                                <img className=" w-full h-full object-cover" src={item.imgUrl} alt="hinh anh nhan vien" />
                            </div>

                            <div className="relative px-[20px] py-[25px] bg-white  text-center">
                                <div className="">
                                    <h4 className="font-[Libre Baskerville] text-h4 font-normal  uppercase"> {item.name} </h4>
                                </div>
                                <span className=" block font-[Quicksand] text-base font-normal text-[#f45d96] mb-[18px]  ">
                                    {item.position}
                                </span>
                                <Network />
                            </div>
                        </div>
                    )
                })}

                </div>

            </div>
        </Container>
    )
}
