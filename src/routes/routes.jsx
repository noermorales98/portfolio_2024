import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import TransitionedIndex from "../views/home/Home.jsx";
import { AnimatePresence } from "framer-motion";
import ErrorWithTransition from "../views/error/Error";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../transitions/scrollTop";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <ScrollToTop />

        <Routes location={location} key={location.pathname}>
          <Route index element={<TransitionedIndex />} />
          <Route path="*" element={<ErrorWithTransition />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default AppRoutes;
