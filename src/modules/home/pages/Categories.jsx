import { useEffect, useState } from "react"
import Container from "../../../common/components/Container"
import axios from "axios";
export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    useEffect(() => {
        if (!categories.length) {
            setIsLoading(true)
            axios.get('http://api.florist-store.learntodev.live/categories').then((res) => {

                setCategories(res.data.data)
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
                setError("Lỗi gì đó")
            })
        }
    }, [categories])
    return (
        <Container>
            {isLoading && "Đang tải dữ liệu"}
            {error && <div style={{ color: 'red' }}>Có lỗi khi tải dữ liệu!!!</div>}
            <div className="pb-[100px] ">
                <div className=" gap-7 flex flex flex-wrap">
                    {categories.map((items, index) => (
                        <div key={index} className="relative flex md:basis-1/2 xl:basis-1/4  gap-8 mb-7 pr-3.5">
                            <img className="" src={items.imgUrl} alt="Categories1" />
                            <div className="absolute  bg-white  bottom-3 text-center w-[90%] left-[50%] translate-x-[-50%] py-4 ">
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

