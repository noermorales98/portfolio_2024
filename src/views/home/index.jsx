import React from "react";
import Header from "./components/Header";
import WebAMedida from "./components/WebAMedida";
import MyPortfolio from "./components/MyPortfolio";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import MyStack from "./components/MyStack";
import transition from "../../transitions/transition";
import AnimatedText from "./components/AnimatedText";

function Index() {
  return (
    <React.Fragment>
      <Header />
      <MyStack />
      <WebAMedida />
      <MyPortfolio />
      <AnimatedText />
      <PreguntasFrecuentes />
    </React.Fragment>
  );
}

const TransitionedIndex = transition(Index);
export default TransitionedIndex;
