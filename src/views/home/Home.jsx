import Header from "./sections/Header";
import MyPortfolio from "./sections/MyPortfolio";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import MyServices from "./sections/MyServices";
import ContactMe from "./sections/ContactMe";
import transition from "../../transitions/transition";
import { Helmet } from "react-helmet";
import StoryLine from "../about/sections/StoryLine";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Homes() {
  return (
    <>
      <Helmet>
        <title>Noelí Rodríguez Morales | Desarrollador Web en Cancún</title>

        <meta
          name="description"
          content="Noelí Rodríguez, Desarrollador Web en React y diseño UX/UI. Creo sitios únicos con enfoque en UX/UI y
          diseño moderno."
        />
      </Helmet>
      <Header />
      <MyPortfolio />
      <MyServices />
      <StoryLine />
      <div className="flex items-center justify-center w-full">
        <motion.div
          className="box items-center justify-center flex"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/sobre-mi">
            <span className="bg-[#171717] text-white text-xl font-medium rounded-xl px-8 py-4">
              Ver más
            </span>
          </Link>
        </motion.div>
      </div>
      <ContactMe />
    </>
  );
}

const Home = transition(Homes);
export default Home;
