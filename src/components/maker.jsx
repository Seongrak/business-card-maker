import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./editor";
import Footer from "./footer";
import Header from "./header";
import styles from "./maker.module.css";
import Preview from "./preview";

const Maker = (props) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    props.authService.logout();
  };

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
