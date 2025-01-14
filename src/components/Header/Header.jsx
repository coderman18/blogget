import React from "react";
import Layout from "../Layout";
import Logo from "./Logo";
import Search from "./Search";
import Auth from "./Auth";
import { Heading } from "./Heading/Heading";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  );
}
