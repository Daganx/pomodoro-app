import { useState, useEffect, useCallback } from "react";
import {
  WORK_TIME,
  SHORT_BREAK_TIME,
  LONG_BREAK_TIME,
  TOTAL_SESSIONS,
} from "../TimerConstant/TimerConstant";
import { sendNotification } from "../NotificationManager/NotificationManager";

export function useTimer() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workSessionCount, setWorkSessionCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleTimerEnd = useCallback(() => {
    setIsRunning(false);
    setShowModal(true);

    if (!isBreak) {
      sendNotification(
        "Session terminée",
        "Votre session de travail est terminée. Prenez une pause !"
      );
      const newWorkSessionCount = workSessionCount + 1;
      setWorkSessionCount(newWorkSessionCount);
      if (newWorkSessionCount === TOTAL_SESSIONS) {
        setShowResetModal(true);
      }
    }
  }, [isBreak, workSessionCount]);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      handleTimerEnd();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, handleTimerEnd]);

  const startNextSession = useCallback(() => {
    setShowModal(false);
    setIsBreak((prevIsBreak) => !prevIsBreak);
    setTimeLeft(
      !isBreak
        ? workSessionCount % 4 === 0
          ? LONG_BREAK_TIME
          : SHORT_BREAK_TIME
        : WORK_TIME
    );
    setIsRunning(true);
  }, [isBreak, workSessionCount]);

  const handleStartPause = useCallback(() => {
    if (timeLeft > 0) {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    }
  }, [timeLeft]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
    setIsBreak(false);
    setWorkSessionCount(0);
    setShowModal(false);
    setShowResetModal(false);
  }, []);

  const handleResetConfirm = useCallback(() => {
    setWorkSessionCount(0);
    setShowResetModal(false);
    startNextSession();
  }, [startNextSession]);

  return {
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
  };
}
