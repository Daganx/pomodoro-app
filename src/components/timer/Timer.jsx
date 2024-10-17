import React, { useState, useEffect } from "react";

function Timer() {
  const WORK_TIME = 25 * 60;
  const SHORT_BREAK_TIME = 5 * 60;
  const LONG_BREAK_TIME = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workSessionCount, setWorkSessionCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      handleTimerEnd();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleTimerEnd = () => {
    setIsRunning(false);
    setShowModal(true);
    if (!isBreak) {
      setWorkSessionCount((prevCount) => prevCount + 1);
    }
  };

  const startNextSession = () => {
    setShowModal(false);
    setIsBreak(!isBreak);
    if (!isBreak) {
      // Si on passe d'une session de travail à une pause
      if (workSessionCount % 4 === 0) {
        setTimeLeft(LONG_BREAK_TIME);
      } else {
        setTimeLeft(SHORT_BREAK_TIME);
      }
    } else {
      // Si on passe d'une pause à une session de travail
      setTimeLeft(WORK_TIME);
    }
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartPause = () => {
    if (timeLeft === 0) {
      // Empêcher le démarrage manuel quand le temps est écoulé
      return;
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
    setIsBreak(false);
    setWorkSessionCount(0);
    setShowModal(false);
  };

  return (
    <div className="Timer">
      <h1>Chronomètre Pomodoro (Version Test)</h1>
      <div className="timer">{formatTime(timeLeft)}</div>
      <div className="session-info">
        Sessions de travail complétées : {workSessionCount}
      </div>
      <div className="controls">
        <button
          onClick={handleStartPause}
          disabled={timeLeft === 0 || showModal}
        >
          {isRunning ? "Pause" : "Démarrer"}
        </button>
        <button onClick={handleReset}>Réinitialiser</button>
      </div>
      {showModal && (
        <div className="modal">
          <p>
            {isBreak
              ? "La pause est terminée !"
              : "La session de travail est terminée !"}
          </p>
          <button onClick={startNextSession}>
            {isBreak ? "Commencer la session de travail" : "Commencer la pause"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Timer;
