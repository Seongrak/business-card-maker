import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import styles from "./maker.module.css";

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
      <Footer />
    </section>
  );
};

export default Maker;
