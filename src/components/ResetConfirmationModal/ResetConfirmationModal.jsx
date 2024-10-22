import React from "react";

export default function ResetConfirmationModal({
  totalSessions,
  onResetConfirm,
  onReset,
}) {
  return (
    <div className="modal">
      <p>VOUS AVEZ TERMINÉ LES {totalSessions} SESSIONS DE TRAVAIL !</p>
      <p>VOUS POUVEZ MAINTENANT PRENDRE UNE PAUSE DE 15 MINUTES.</p>
      <p>
        VOULEZ-VOUS RECOMMENCER UNE NOUVELLE SÉRIE DE {totalSessions} SESSIONS ?
      </p>
      <button onClick={onResetConfirm}>OUI, RECOMMENCER</button>
      <button onClick={onReset}>NON, RÉINITIALISER</button>
    </div>
  );
}
