import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Eatery from "./pages/Eatery";
import Transportation from "./pages/Transportation";
import Outdoor from "./pages/Outdoor";
import Manufacturers from "./pages/Manufacturers";
import Travel from "./pages/Travel";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eatery" element={<Eatery />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
