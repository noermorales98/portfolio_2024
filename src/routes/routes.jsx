import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import TransitionedIndex from "../views/home/index";
import { AnimatePresence } from "framer-motion";
import ErrorWithTransition from "../views/error/Error";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<TransitionedIndex />} />
          <Route path="*" element={<ErrorWithTransition />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRoutes;
