import { GetServerSideProps } from "next";
import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface HomeProps {
  challengesContextProps: ChallengesContextProps;
}

const Home = ({ challengesContextProps }: HomeProps) => {
  return (
    <ChallengesProvider
      level={challengesContextProps.level}
      currentExperience={challengesContextProps.currentExperience}
      challengesCompleted={challengesContextProps.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;
  const challengesContextProps = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };

  return {
    props: { challengesContextProps },
  };
};
