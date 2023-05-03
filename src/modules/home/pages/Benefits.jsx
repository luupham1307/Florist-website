import { Fragment } from "react"
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
            <div>
                <div>
                    <div className=" flex  "> {arrBenefis.map((item, i) => (
                        <Fragment key={i}>
                            <div className=" pr-8  ">
                                <img className="w-12" src={item.image} alt="icon1" />
                            </div>
                            <div className="flex-col">
                                <h4 className="font-['Libre_Baskerville'] ">{item.heading}</h4>
                                <p className="font-['Quicksand'] text-base">{item.description}</p>
                            </div>
                        </Fragment>
                    ))}

                    </div>
                </div>
            </div>
        </Container>

    )
}
