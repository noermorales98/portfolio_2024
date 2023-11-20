import transition from "../../transitions/transition";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import StoryLine from "./sections/StoryLine";

function About() {
  return (
    <>
      <Header />
      <AboutMe />
      <StoryLine />
    </>
  );
}

const TransitionedAbout = transition(About);
export default TransitionedAbout;
