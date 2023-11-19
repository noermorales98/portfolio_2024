import React from "react";
import Header from "./sections/Header";
import WebAMedida from "./sections/WebAMedida";
import MyPortfolio from "./sections/MyPortfolio";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import MyStack from "./sections/MyStack";
import transition from "../../transitions/transition";
import AnimatedText from "./sections/AnimatedText";
import ContactMe from "./sections/ContactMe";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <WebAMedida />
      <MyPortfolio />
      <div className="bg-[#171717] py-8 mt-20 max-md:pb-20 max-md:pt-2">
        <MyStack />
        <AnimatedText />
      </div>
      <ContactMe />
      <PreguntasFrecuentes />
    </React.Fragment>
  );
}

const TransitionedIndex = transition(Home);
export default TransitionedIndex;
