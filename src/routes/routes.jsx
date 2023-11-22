import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ErrorWithTransition from "../views/error/Error";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../transitions/scrollTop";
import TransitionedAbout from "../views/about/About.jsx";
import TransitionedPortafolio from "../views/portafolio/Portafolio.jsx";
import TransitionedProyecto from "../views/portafolio/code/Proyecto.jsx";
import TransitionedContacto from "../views/contact/Contacto.jsx";
import Home from "../views/home/Home.jsx";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/sobre-mi" element={<TransitionedAbout />} />
          <Route path="/portafolio" element={<TransitionedPortafolio />} />
          <Route path="/portafolio/:code" element={<TransitionedProyecto />} />
          <Route path="/contacto" element={<TransitionedContacto />} />
          <Route path="*" element={<ErrorWithTransition />} />
        </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
