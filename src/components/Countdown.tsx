import { useState, useEffect, useContext } from "react";

import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isCounting,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton}`}>
          <span>Ciclo encerrado</span>
          <img src="icons/cycle_completed.svg" alt="Ciclo encerrado" />
        </button>
      ) : (
        <>
          {isCounting ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonCounting}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};
