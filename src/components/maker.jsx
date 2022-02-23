import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Editor from "./editor";
import Footer from "./footer";
import Header from "./header";
import styles from "./maker.module.css";
import Preview from "./preview";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({
    /*
    1: {
      id: "1",
      name: "Rocky-test",
      company: "TD bank-test",
      theme: "dark",
      title: "Software Engineer",
      email: "rocky@gm.com",
      message: "TEST REACT STUDY:)",
      fileName: "rocky",
      fileURL: "",
    },
    2: {
      id: "2",
      name: "Rocky-test2",
      company: "TD bank-test",
      theme: "light",
      title: "Software Engineer",
      email: "rocky@gm.com",
      message: "TEST REACT STUDY:)",
      fileName: "rocky",
      fileURL: "",
    },
    3: {
      id: "3",
      name: "Rocky-test3",
      company: "TD bank-test",
      theme: "colorful",
      title: "Software Engineer",
      email: "rocky@gm.com",
      message: "TEST REACT STUDY:)",
      fileName: "rocky",
      fileURL: "",
    },
    */
  });
  const historyState = useLocation().state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  // Login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  // Sync
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  const CreateOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={CreateOrUpdateCard}
          updateCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
