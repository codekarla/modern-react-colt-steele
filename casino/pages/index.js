import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casino!</title>
        <meta
          name="description"
          content="Mini Exercises - from the Modern React Bootcamp by Colt Steele"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://www.udemy.com/course/modern-react-bootcamp/"
            target="blank"
          >
            Casino!
          </a>
        </h1>

        <p className={styles.description}>
          Choose a <code className={styles.code}>game</code> to play:
        </p>

        <div className={styles.grid}>
          <Link href="/slotmachine" as="/meow-slot-machine">
            <a className={styles.card}>
              <h2>Meow Slot Machine &rarr;</h2>
              <p>A dumb slot machine featuring meows.</p>
            </a>
          </Link>

          <Link href="/x">
            <a className={styles.card}>
              <h2>X &rarr;</h2>
              <p>Xxxxx...</p>
            </a>
          </Link>

          <Link href="/y">
            <a className={styles.card}>
              <h2>Y &rarr;</h2>
              <p>Yyyyy...</p>
            </a>
          </Link>

          <Link href="/z">
            <a className={styles.card}>
              <h2>Z &rarr;</h2>
              <p>Zzzzz...</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>July 2021</footer>
    </div>
  );
}
