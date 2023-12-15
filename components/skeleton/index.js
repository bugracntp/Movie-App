import React from "react";
import styles from "./styles.module.css";

function Skeleton(width, heigth) {
  return <div className={styles.skeleton} style={{ width, heigth }} />;
}

export default Skeleton;