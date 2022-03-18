import styles from "./app.module.css";
import Login from "./components/login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./components/maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/business-card-maker/"
            element={<Login authService={authService} />}
          />
          <Route
            path="/business-card-maker/maker"
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;