// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Features from "./pages/Features";
import CataloguePage from "./pages/CataloguePage"; // ✅ Add this line
import TestimonialFeedback from "./pages/TestimonialFeedback";
import Feedbacks from "./pages/Feedbacks";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/features" element={<Features />} />
        <Route path="/catalogue" element={<CataloguePage />} /> {/* ✅ NEW */}
        <Route path="/testimonials-feedback" element={<TestimonialFeedback />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
      </Route>
    </Routes>
  );
};

export default App;
