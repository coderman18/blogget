import React from "react";
import styles from "./Heading.module.css";

export const Heading = ({ text }) => {
  return <div className={styles.heading}>{text}</div>;
};
