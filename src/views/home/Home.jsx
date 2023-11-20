import React from "react";
import Header from "./sections/Header";
import WebAMedida from "./sections/WebAMedida";
import MyPortfolio from "./sections/MyPortfolio";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import MyServices from "./sections/MyServices";
import transition from "../../transitions/transition";
import ContactMe from "./sections/ContactMe";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <WebAMedida />
      <MyPortfolio />
      <div className="bg-[#171717] mt-20 pb-4 max-md:pb-14">
        <MyServices />
      </div>
      <ContactMe />
      <PreguntasFrecuentes />
    </React.Fragment>
  );
}

const TransitionedIndex = transition(Home);
export default TransitionedIndex;
