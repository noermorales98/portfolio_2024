import Header from "./sections/Header";
import WebAMedida from "./sections/WebAMedida";
import MyPortfolio from "./sections/MyPortfolio";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import MyServices from "./sections/MyServices";
import ContactMe from "./sections/ContactMe";
import transition from "../../transitions/transition";
import { Helmet } from "react-helmet";

function Homes() {
  return (
    <>
      <Helmet>
      <title>Noelí Rodríguez Morales | Desarrollador Web en Cancún</title>

        <meta
          name="description"
          content="Noelí Rodríguez, Desarrollador Web en React y diseño UX/UI. Ofrezco servicios de desarrollo frontend y creación de experiencias de usuario."
        />
      </Helmet>
      <Header />
      <WebAMedida />
      <MyPortfolio />
      <MyServices />
      <ContactMe />
      <PreguntasFrecuentes />
    </>
  );
}

const Home = transition(Homes);
export default Home;
