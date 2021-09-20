import { useContext } from "react";

import styles from "../styles/components/ChallengeBox.module.css";

import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleFailChallenge = () => {
    resetChallenge();
    resetCountdown();
  };
  const handleCompleteChallenge = () => {
    completeChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.activeChallenge}>
          <header>Ganhe {activeChallenge.experience} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleFailChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={handleCompleteChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.noActiveChallenge}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level_up.svg" alt="Level up" />
            Avance para o proximo nivel completando desafios
          </p>
        </div>
      )}
    </div>
  );
};
