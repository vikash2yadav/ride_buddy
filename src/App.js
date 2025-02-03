import React, { lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import { CommonContext } from "./context/CommonContext";

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
const Checkout = lazy(() => import("./pages/Checkout"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  const { snackOpen, messageType, snackMessage, setSnackOpen } =
    useContext(CommonContext);
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
        <Route path="/:brand/:model/:id/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <SnackBar
        open={snackOpen}
        message={snackMessage}
        type={messageType}
        setSnackOpen={setSnackOpen}
      />
    </Suspense>
  );
};

export default App;
