import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/layouts/Footer";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  );
};

export default App;
