import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();
  console.log({ data });
  const session = false;
  return (
    <div className={styles.container}>
      <title>Tweet Tools</title>
      <meta name='description' content='Created by Joao Lima (Bokomoko)' />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to TweetTools V1</h1>
        {!session && (
          <>
            <p>Not logged in</p>
            <button onClick={() => signIn('twitter')}>
              Login with Twitter
            </button>
          </>
        )}
        {session && (
          <>
            <p>Logged in as {session.user.email} </p>
            <button onClick={() => signOut()}>Logout</button>
          </>
        )}
      </main>
      ,
    </div>
  );
};

export default Home;
