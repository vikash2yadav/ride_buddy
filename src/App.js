import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/layouts/Footer";
import TermsConditions from "./pages/TermsConditions";
import FAQ from './pages/FAQ';
import About from "./pages/About";
import Investor from "./pages/Investor";
import ContactUs from './pages/ContactUs';
import BecomePartnerDealer from './pages/BecomePartnerDealer';
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/investors" element={<Investor />} />
      <Route path="/partner_request" element={<BecomePartnerDealer />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
};

export default App;
