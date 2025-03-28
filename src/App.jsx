import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import Sample from "./components/sample";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <Sample />
    </>
  );
}

export default App;
