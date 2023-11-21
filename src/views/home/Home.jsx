import Header from "./sections/Header";
import WebAMedida from "./sections/WebAMedida";
import MyPortfolio from "./sections/MyPortfolio";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import MyServices from "./sections/MyServices";
import ContactMe from "./sections/ContactMe";
import transition from "../../transitions/transition";

function Homes() {
  return (
    <>
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
