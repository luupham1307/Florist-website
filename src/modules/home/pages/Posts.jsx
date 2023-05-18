import Container from "../../../common/components/Container";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import BlogItem from "../../../common/components/BlogItem";
import { Link } from "react-router-dom";

export default function Posts() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: () =>
      supabase.from("Blog").select("type, title, thumbnail, description, day"),
    select: (res) => res.data,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Container>
        <div className="pt-[100px] pb-[50px]">
          <div className="md:flex md:justify-between">
            {/* Posts heading */}
            <div className="pb-[45px] md:pl-[15px]">
              <span className=" block font-[Quicksand] text-[#f45d96] text-base font-bold uppercase tracking-[4px] mb-2 ">
                Latest posts
              </span>
              <h2 className="font-[Libre Baskerville] text-[42px] leading-[58px] text-[#111111] font-normal ">
                Florist tricks
              </h2>
            </div>
            {/* Posts button */}
            <div className="mb-[30px] sm:mb-[30px] md:mt-[20px] ">
              <Link to="/blog" className="font-[Quicksand] border-solid border-[#f45d96] border-[2px] rounded-full px-[30px] py-3 mb-[45px] text-[15px]  text-[#111111] font-bold tracking-[2px] uppercase md:justify-end ">
                View all posts
              </Link>
            </div>
          </div>

          {/* Blog item */}
          <div className="md:flex md:flex-wrap">
            {blog.map((blogItem, index) => {
              if (index <= 2) {
                return (
                  <BlogItem key={index} blogItem={blogItem} index={index} />
                );

              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
