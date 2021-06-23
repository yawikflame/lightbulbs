import Head from 'next/head';
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export const UserContext = createContext({ name: '', score: 0, bestScore: 0 });

export default function Home() {
  const user = useContext(UserContext);
  const [username, setUsername] = useState('');
  const router = useRouter();

  function startOnClickHandler() {
    user.name = username;
    router.push('/play');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lightbulbs</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.userinput}>
          <h2>Welcome to Lightbulbs Memory Game</h2>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your name'
          />
          <button onClick={startOnClickHandler}>Start</button>
        </div>
      </main>
    </div>
  );
}