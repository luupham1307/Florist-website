import React from "react";
import BlogItem from "../../../common/components/BlogItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import Container from "../../../common/components/Container";

export default function Blog() {
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
    <div className="py-24">
      <Container>
        <div className="md:flex md:flex-wrap ">
          {blog.map((blogItem, index) => {
            return <BlogItem key={index} blogItem={blogItem} index={index} />;
          })}
        </div>
        <div className="text-center">
          <a
            href=""
            className="inline-block font-[Quicksand] text-sm text-[#111111] font-bold tracking-[2px] uppercase pb-[2px] mb-[2px] border-solid border-b-[2px] border-[#111111]"
          >
            View all posts
          </a>
        </div>
      </Container>
    </div>
  );
}
