import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./editor";
import Footer from "./footer";
import Header from "./header";
import styles from "./maker.module.css";
import Preview from "./preview";

const Maker = (props) => {
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
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
