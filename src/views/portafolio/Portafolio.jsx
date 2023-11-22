import Header from "./sections.jsx/Header";
import transition from "../../transitions/transition";
import Proyectos from "./sections.jsx/Proyectos";
import { Helmet } from "react-helmet";

function Portafolio() {
  return (
    <>
      <Helmet>
        <title>Portafolio - Noelí Rodríguez</title>
        <meta
          name="description"
          content="Explora mi portafolio de Noelí Rodríguez, donde muestro mis proyectos de desarrollo web."
        />
      </Helmet>
      <Header />
      <Proyectos />
    </>
  );
}
const TransitionedPortafolio = transition(Portafolio);
export default TransitionedPortafolio;
