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
import PagesNav from "./modules/pages/cart";
import ContactNav from "./modules/contact";

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
          <Route path="/blog" element={<BlogNav />} />
          <Route path="/pages" element={<PagesNav />} />
          <Route path="/contact" element={<ContactNav />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);
