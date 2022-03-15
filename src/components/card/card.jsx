import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "./images/default_logo.png";
const Card = (props) => {
  const { name, company, title, email, message, theme, fileURL } = props.card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img src={url} alt="profile" className={styles.profile} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getTheme(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
