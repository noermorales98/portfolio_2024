import transition from "../../transitions/transition";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import StoryLine from "./sections/StoryLine";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>Sobre mí - Noelí Rodríguez</title>
        <meta
          name="description"
          content="Conoce más sobre mí, desarrollador web en React y diseño UX/UI."
        />
      </Helmet>
      <Header />
      <AboutMe />
      <StoryLine />
    </>
  );
}

const TransitionedAbout = transition(About);
export default TransitionedAbout;
