import React from "react";
import Blog from "./pages/Blog";
import Slice from "../../common/components/Slice";
import BlogDetail from "./pages/BlogDetail";

export default function BlogNav() {
  return (
    <React.Fragment>
      <Slice />
      <Blog />
      <BlogDetail/>
    </React.Fragment>
  );
}
