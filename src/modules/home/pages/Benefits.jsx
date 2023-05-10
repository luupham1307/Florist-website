
import Container from "../../../common/components/Container"
let arrBenefis = [
    {
        image: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Icons/benefit-1.png",
        heading: "100% Freshness",
        description: "Most people are unaware of the less common flower"
    },
    {
        image: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Icons/benefit-2.png",
        heading: "Made by artist",
        description: "Most people are unaware of the less common flower"
    },
    {
        image: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Icons/benefit-3.png",
        heading: "Own courier",
        description: "Most people are unaware of the less common flower"
    },
    {
        image: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Icons/benefit-4.png",
        heading: "100% Freshness",
        description: "Most people are unaware of the less common flower"
    }
]

export default function Benefits() {
    return (
        <Container>
            <div className="py-[60px] flex flex-wrap  ">
                {arrBenefis.map((item, i) => (

                    <div key={i} className=" flex md:basis-1/2 xl:basis-1/4  gap-8 mb-7 pr-3.5 ">
                        <div className=" ">
                            <img className="max-w-[200px]" src={item.image} alt="icon1" />
                        </div>
                        <div className=" ">
                            <h4 className="font-['Libre_Baskerville'] mb-2.5 text-h4">{item.heading}</h4>
                            <p className="font-['Quicksand'] text-base ">{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </Container>

    )
}
