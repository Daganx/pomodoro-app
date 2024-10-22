import React from "react";

export default function SessionEndModal({ isBreak, onStartNextSession }) {
  return (
    <div className="modal">
      <p>
        {isBreak
          ? "LA PAUSE EST TERMINÉE !"
          : "LA SESSION DE TRAVAIL EST TERMINÉE !"}
      </p>
      <button onClick={onStartNextSession}>
        {isBreak ? "COMMENCER LA SESSION DE TRAVAIL" : "COMMENCER LA PAUSE"}
      </button>
    </div>
  );
}
