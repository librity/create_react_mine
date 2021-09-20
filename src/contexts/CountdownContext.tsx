import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isCounting: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  let countdownTimeout: NodeJS.Timeout;
  const twentyFiveMinutes = 25 * 60;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [timer, setTimer] = useState(twentyFiveMinutes);
  const [isCounting, setIsCounting] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const startCountdown = () => setIsCounting(true);
  const resetCountdown = () => {
    setTimer(twentyFiveMinutes);
    clearTimeout(countdownTimeout);
    setIsCounting(false);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isCounting && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isCounting && timer === 0) {
      setHasFinished(true);
      setIsCounting(false);
      startNewChallenge();
    }
  }, [isCounting, timer]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isCounting,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
