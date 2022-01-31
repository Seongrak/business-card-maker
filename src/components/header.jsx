import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    {props.onLogout && (
      <button onClick={props.onLogout} className={styles.logout}>
        Logout
      </button>
    )}
    <img src="./images/logo.png" alt="logo img" className={styles.logo} />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
