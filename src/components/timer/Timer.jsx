import React, { useEffect } from "react";
import SessionEndModal from "../SessionEndModal/SessionEndModal";
import ResetConfirmationModal from "../ResetConfirmationModal/ResetConfirmationModal";
import { requestNotificationPermission } from "../NotificationManager/NotificationManager";
import { useTimer } from "../UseTimer/UseTimer";
import { formatTime } from "../TimerUtils/TimerUtils";
import { TOTAL_SESSIONS } from "../TimerConstant/TimerConstant";
import "./Timer.css";

function Timer() {
  const {
    timeLeft,
    isRunning,
    isBreak,
    workSessionCount,
    showModal,
    showResetModal,
    startNextSession,
    handleStartPause,
    handleReset,
    handleResetConfirm,
    setShowModal,
    setShowResetModal,
  } = useTimer();

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div className="Timer">
      <h1>POMODORO</h1>
      <div className="timer">{formatTime(timeLeft)}</div>
      <div className="session-info">
        SESSION DE TRAVAIL COMPLETÉES : {workSessionCount} / {TOTAL_SESSIONS}
      </div>
      <div className="controls">
        <button
          onClick={handleStartPause}
          disabled={timeLeft === 0 || showModal}
        >
          {isRunning ? "PAUSE" : "REPRENDRE"}
        </button>
        <button onClick={handleReset}>REINITIALISER</button>
      </div>
      {showModal && (
        <SessionEndModal
          isBreak={isBreak}
          onStartNextSession={startNextSession}
        />
      )}
      {showResetModal && (
        <ResetConfirmationModal
          totalSessions={TOTAL_SESSIONS}
          onResetConfirm={handleResetConfirm}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default Timer;
