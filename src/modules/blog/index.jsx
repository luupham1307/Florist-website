import React from "react";
import Blog from "./pages/Blog";
import Slice from "../../common/components/Slice";

export default function BlogNav() {
  return (
    <React.Fragment>
      <Slice pageHeader={"Our blog"} pageName={"Blog"} />
      <Blog />
    </React.Fragment>
  );
}
