import Container from "../../../common/components/Container";
import Network from "../../../common/components/Network";

let imgTeam = [
  {
    imgUrl:
      "https://media.istockphoto.com/id/1188458318/sv/vektor/portr%C3%A4tt-av-en-vacker-asiatisk-aff%C3%A4rskvinna-i-glas%C3%B6gon-vektor-platt-illustration-asiatiska.jpg?s=612x612&w=0&k=20&c=TH47TUJMiCxbbB7u6tX2RMFYu0mBsgS9Cn_1OVLsZ-Q=",
    name: "Lina",
    position: "Marketer",
  },
  {
    imgUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/285ce8115100471.6047eaa30896a.jpg",
    name: "John",
    position: "Leader",
  },

  {
    imgUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ee331845622783.5836d342bfa0e.jpg  ",
    name: "Hana",
    position: "CEO",
  },
  {
    imgUrl: "https://pbs.twimg.com/media/EDwMBvyVUAU2OZ4.jpg",
    name: "Helen",
    position: "Staff",
  },
];

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
            <button className="font-[Quicksand] border-solid border-[#f45d96] border-[2px] rounded-full px-[30px] py-3 mb-[45px] text-[15px] text-[#111111] font-bold tracking-[2px] uppercase md:justify-end ">
              Meet our team
            </button>
          </div>
        </div>

        {/* content */}
        <div className="mb-[50px] md:flex md:flex-wrap ">
          {imgTeam.map((item, i) => {
            return (
              <div
                key={i}
                className="my-4 shadow-xl md:px-2 md:basis-1/2 xl:basis-1/4"
              >
                <div>
                  <img
                    className="w-full object-cover object-center"
                    src={item.imgUrl}
                    alt="hinh anh nhan vien"
                  />
                </div>

                <div className="h-[150px] relative px-[20px] py-[25px] bg-white  text-center">
                  <div className="">
                    <h4 className="font-[Libre Baskerville] text-h4 font-normal  uppercase">
                      {item.name}
                    </h4>
                  </div>
                  <span className=" block font-[Quicksand] text-base font-normal text-[#f45d96] mb-[18px]  ">
                    {item.position}
                  </span>
                  <Network />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
