import React from "react";
import styles from "./Main.module.css";
import Layout from "../Layout";

export const Main = (props) => {
  return (
    <Layout>
      <div className={styles.main}></div>
    </Layout>
  );
};
