import React from "react";
import CardAddForm from "./card_add_form/card_add_form";
import CardEditForm from "./card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = (props) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {props.cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={props.addCard} />
  </section>
);

export default Editor;
