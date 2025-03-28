import React from "react";
import styles from "../components/sample.module.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Sample() {
  const [isEnabled, setIsEnabled] = React.useState(true);

  return (
    <div className={styles.parentContainer}>
      <motion.div
        className={styles.container}
        initial={false}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        animate={{ y: isEnabled ? 100 : 0 }}
      />
      <button onClick={() => setIsEnabled(!isEnabled)}>click me</button>
    </div>
  );
}

export default Sample;
