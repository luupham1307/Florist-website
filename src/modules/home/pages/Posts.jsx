import React from "react";
import Container from "../../../common/components/Container";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";

export default function Posts() {
  const blogImagesUrl = [
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Blog/blog-1.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Blog/blog-2.jpg",
    "https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Blog/blog-3.jpg",
  ];

  const blogTypes = ["Trend new", "Tips & Idea", "DIY & Crafts"];
  const blogTitles = [
    "8 Romantic Gifts to Celebrate Your Wedding Anniversary",
    "Red Rose - Flower of love of Greek Mythology",
    "Beautiful Mandalas Made From Flowers by Kathy Klein",
  ];

  const blogDesciptions = [
    "Flowers have a language all their own. In Victorian times, receiving a…",
    "Flowers have a language all their own. In Victorian times, receiving a…",
    "Flowers have a language all their own. In Victorian times, receiving a…",
  ];

  const queryClient = useQueryClient( );
  const { data:blog, isLoading, error } = useQuery({
    queryKey: ["blog"],
    queryFn: supabase.from("blog").select("type, title, description"),
    select: (res) => res.data,
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Container>
        <div className="pt-[100px] pb-[50px]">
          <div className="md:flex md:justify-between">
            {/* Posts heading */}
            <div className="pb-[45px]">
              <span className="font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] mb-2 ">
                Latest posts
              </span>
              <h2 className="font-[Libre Baskerville] text-[42px] leading-[58px] text-[#111111] font-normal ">
                Florist tricks
              </h2>
            </div>
            {/* Posts button */}
            <div>
              <button className="font-[Quicksand] border-solid border-[#f45d96] border-[2px] rounded-full px-[30px] py-3 mb-[45px] text-[15px]  text-[#111111] font-bold tracking-[2px] uppercase md:justify-end ">
                View all posts
              </button>
            </div>
          </div>

          {/* Blog item */}
          <div>
            {blog.map((blogItem,index) => (
                 <div className="relative">
                 <img 
                   src={blogItem.thumbnail}
                   alt={`blog-img-${index}`}
                 />


              
                 <span className="absolute top-1/2">{blogItem.type}</span>
                 <h4>{blogItem.title}</h4>
                 <p>
                  {blogItem.description}
                 </p>
                 <span>Day</span>
               </div>
            ))}
           
            {/* item 1 */}
            {/* <div className="relative">
              <img
                src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Blog/blog-1.jpg"
                alt="blog-img-1"
              />

              <span>Trend new</span>
              <h4>8 Romantic Gifts to Celebrate Your Wedding Anniversary</h4>
              <p>
                Flowers have a language all their own. In Victorian times,
                receiving a…
              </p>
              <span></span>
            </div> */}

            {/* item 2 */}
            {/* <div>
              <div>
                <img
                  src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Blog/blog-2.jpg"
                  alt="blog-img-2"
                />
              </div>
              <div>
                <span>Tips & Idea</span>
                <h4>8 Romantic Gifts to Celebrate Your Wedding Anniversary</h4>
                <p>
                  Flowers have a language all their own. In Victorian times,
                  receiving a…
                </p>
                <span></span>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
