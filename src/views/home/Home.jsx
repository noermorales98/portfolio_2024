import React from "react";
import Header from "./components/Header";
import WebAMedida from "./components/WebAMedida";
import MyPortfolio from "./components/MyPortfolio";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import MyStack from "./components/MyStack";
import transition from "../../transitions/transition";
import AnimatedText from "./components/AnimatedText";
import ContactMe from "./components/ContactMe";

function Index() {
  return (
    <React.Fragment>
      <Header />
      <WebAMedida />
      <MyPortfolio />
      <div className="bg-[#171717] py-8 mt-20">
        <MyStack />
        <AnimatedText />
      </div>
      <ContactMe />
      <PreguntasFrecuentes />
    </React.Fragment>
  );
}

const TransitionedIndex = transition(Index);
export default TransitionedIndex;
