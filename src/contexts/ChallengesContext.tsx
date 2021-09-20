import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

import challenges from "../../challenges.json";

import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  experience: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experieceToNextLevel: number;
  levelUp: () => void;
  closeLevelUpModal: () => void;

  challengesCompleted: number;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experieceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };
  const closeLevelUpModal = () => setIsLevelUpModalOpen(false);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const newChallenge = challenges[randomChallengeIndex];

    setActiveChallenge(newChallenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉️", {
        body: `Valendo ${newChallenge.experience}xp!`,
      });
    }
  };
  const resetChallenge = () => setActiveChallenge(null);

  const completeChallenge = () => {
    if (activeChallenge === null) return;

    const { experience } = activeChallenge;

    let newExperience = currentExperience + experience;
    if (newExperience >= experieceToNextLevel) {
      newExperience = newExperience - experieceToNextLevel;
      levelUp();
    }

    setCurrentExperience(newExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experieceToNextLevel,
        levelUp,
        closeLevelUpModal,

        challengesCompleted,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
