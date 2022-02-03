import React from "react";
import CardAddForm from "./card_add_form/card_add_form";
import CardEditForm from "./card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = (props) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(props.cards).map((key) => (
      <CardEditForm
        FileInput={props.FileInput}
        key={key}
        card={props.cards[key]}
        updateCard={props.updateCard}
        deleteCard={props.deleteCard}
      />
    ))}
    <CardAddForm FileInput={props.FileInput} onAdd={props.addCard} />
  </section>
);

export default Editor;
