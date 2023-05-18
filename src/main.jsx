import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/swiper.css";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Link,
  Routes,
} from "react-router-dom";
import Layout from "./common/layout";
import Home from "./modules/home";
import AboutNav from "./modules/about";
import ServicesNav from "./modules/services";
import BlogNav from "./modules/blog";
import Contact from "./modules/contact";
import ShopNav from "./modules/shop";
import ContactNav from "./modules/contact";
import CartDetails from "./modules/cart/CartDetails";
import Checkout from "./modules/cart/Checkout";
import BlogDetail from "./modules/cart/BlogDetail";
import ShopDetail from "./modules/cart/ShopDetail";
import Shop from "./modules/shop/pages/Shop";
import Blog from "./modules/blog/pages/Blog";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutNav />} />
          <Route path="/services" element={<ServicesNav />} />
          <Route path="/shop" element={<ShopNav />} />
          <Route path="/cart/shopdetail" element={<ShopDetail />} />
          <Route path="/blog" element={<BlogNav />} />
          <Route path="/cart/blogdetail" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactNav />} />
          <Route path="/contact/contact" element={<Contact />} />
          <Route path="cart/cartdetails" element={<CartDetails />} />
          <Route path="/cartdetails/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          rou
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);
