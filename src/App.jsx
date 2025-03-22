import { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div style={{ height: "200vh" }}>
      <motion.div
        style={{
          y,
          width: "100%",
          height: "100vh",
          backgroundImage: "url('https://via.placeholder.com/1500x1000')",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
      <div style={{ height: "100vh", position: "relative", zIndex: 1 }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
          Scroll Down
        </h1>
      </div>
    </div>
  );
}

export default App;
