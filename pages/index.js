import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatchUser, useUser } from '../Context/UserContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const user = useUser();
  const dispatch = useDispatchUser();
  const router = useRouter();

  const handleUsername = (userInput) =>
    dispatch({
      type: 'UPDATE_NAME',
      payload: userInput,
    });

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
            value={user.name}
            onChange={(e) => handleUsername(e.target.value)}
            placeholder='Enter your name'
          />
          <button onClick={() => router.push('/play')}>Start</button>
        </div>
      </main>
    </div>
  );
}
