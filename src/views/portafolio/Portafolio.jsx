import Header from "./sections.jsx/Header";
import transition from "../../transitions/transition";
import Proyectos from "./sections.jsx/Proyectos";

function Portafolio() {
  return (
    <>
      <Header />
      <Proyectos />
    </>
  );
}
const TransitionedPortafolio = transition(Portafolio);
export default TransitionedPortafolio;
