import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentExperience, experieceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experieceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experieceToNextLevel} xp</span>
    </header>
  );
};
