import React from "react";
import Header from "./components/Header";
import WebAMedida from "./components/WebAMedida";
import MyPortfolio from "./components/MyPortfolio";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import MyStack from "./components/MyStack";

export default function Index() {
  return (
    <React.Fragment>
      <Header />
      <MyStack />
      <WebAMedida />
      <MyPortfolio />
      <PreguntasFrecuentes />
    </React.Fragment>
  );
}
