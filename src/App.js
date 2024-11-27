import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load the pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Investor = lazy(() => import("./pages/Investor"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const BecomePartnerDealer = lazy(() => import("./pages/BecomePartnerDealer"));
const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));
const VehicleDetails = lazy(() => import("./pages/VehicleDetails"));
const Home = lazy(() => import("./pages/Home"));
const Loader = lazy(() => import("./components/layouts/Loader"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:brand/:model/:id" element={<VehicleDetails />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/partner_request" element={<BecomePartnerDealer />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Suspense>
  );
};

export default App;
