import React from "react";
import CardEditForm from "./card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = (props) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {props.cards.map((card) => (
      <CardEditForm card={card} />
    ))}
  </section>
);

export default Editor;
