import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/swiper.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Navbar from "./common/layout/Navbar";
import Benefits from "./modules/home/pages/Benefits";
import Footer from "./common/layout/Footer/Footer";
import Instagram from "./common/layout/Instagram/Instagram";
import Posts from "./modules/home/pages/Posts";
import CallToAction from "./modules/home/pages/CallToAction";
import Categories from "./modules/home/pages/Categories";
import Testimonial from "./common/components/Testimonial/Testimonial";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Slide from "./modules/home/pages/Slide";
import Blog from "./modules/blog/pages/Blog";
import Arrival from "./modules/home/pages/Arrival";
import ShopListing from "./modules/shop/pages/ShopListing";
import About from "./common/components/About";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.Fragment>
      <Navbar />
      <Slide />
      <Benefits />
      <Categories />
      <About />
      <CallToAction />
      {/* <Blog />  trang BLOG */}
      {/* <ShopListing/> trang SHOP */}
      <Arrival />
      <Posts />
      <Testimonial />
      <Instagram />
      <Footer />
    </React.Fragment>
  </QueryClientProvider>
);
