import React from "react";
import Header from "./components/Header";
import WebAMedida from "./components/WebAMedida";
import MyPortfolio from "./components/MyPortfolio";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import MyStack from "./components/MyStack";

import { motion, AnimatePresence } from "framer-motion";

export default function Index() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Header />
        <MyStack />
        <WebAMedida />
        <MyPortfolio />
        <PreguntasFrecuentes />
      </motion.div>
    </AnimatePresence>
  );
}
