import React from "react";
import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__description">Страница не найдена</p>
        <p className="not-found__back" onClick={handleGoBack}>
          Назад
        </p>
      </div>
    </section>
  );
}

export default NotFound;