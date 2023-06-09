// import { useEffect, useState } from "react"
import Container from "../../../common/components/Container"
// import axios from "axios";
let categories = [
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Categories/categories-1.jpg",
        title: "Fresh Flower",
        item: "( 25 items )"
    },
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Categories/categories-2.jpg",
        title: "Succulent plants",
        item: "( 162 items )"
    },
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Categories/categories-3.jpg",
        title: "Cactus plants",
        item: "( 58 items )"
    },
    {
        imgUrl: "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Categories/categories-4.jpg",
        title: "Funiture treer",
        item: "( 25 items )"
    }
]
export default function Categories() {
    // const [categories, setCategories] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null)
    // useEffect(() => {
    //     if (!categories.length) {
    //         setIsLoading(true)
    //         axios.get('http://18.141.139.55:3000/categories').then((res) => {

    //             setCategories(res.data.data)
    //             setIsLoading(false);
    //         }).catch(() => {
    //             setIsLoading(false);
    //             setError("error")
    //         })
    //     }
    // }, [categories])
    return (
        <Container>
            {/* {isLoading && "Đang tải dữ liệu"}
            {error && <div style={{ color: 'red' }}>Có lỗi khi tải dữ liệu!!!</div>} */}

            <div className="w-full  md:px-0 mx-auto  ">

                <div className="flex flex-wrap  ">
                    {categories.map((items, index) => (
                        <div key={index} className="relative w-full flex md:basis-1/2 xl:basis-1/4 sm:pr-[30px]   mb-[30px] ">
                            <img className=" w-full h-[440px] object-cover object-center " src={items.imgUrl} alt="Categories1" />
                            <div className="absolute  bg-white  bottom-3 text-center w-[80%] left-[50%] translate-x-[-55%] py-4 ">
                                <h4 className="text-h4 font-['Libre_Baskerville'] text-center">{items.title}</h4>
                                <span className="font-['Quicksand'] text-center">{items.item}</span>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </Container>
    )
}

