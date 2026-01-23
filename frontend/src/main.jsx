import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_Page/home/HomePage.jsx";
import Signup from "./landing_Page/signup/Signup.jsx";
import About from "./landing_Page/about/About.jsx";
import SupportPage from "./landing_Page/support/SupportPage.jsx";
import ProductsPage from "./landing_Page/products/ProductsPage.jsx";
import PricingPage from "./landing_Page/pricing/PricingPage.jsx";
import Navbar from "./landing_Page/Navbar.jsx";
import Footer from "./landing_Page/Footer.jsx";
import NotFound from "./landing_Page/NotFound.jsx";
import UserSignup from "./landing_Page/signup/UserSignup.jsx";
import UserLogin from "./landing_Page/signup/UserLogin.jsx";
import Dashboard from "../../dashboard/src/components/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/userlogin" element={<UserLogin />} />

      <Route path="/dashboard/*" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
