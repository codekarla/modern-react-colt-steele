import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Casino!</title>
                <meta
                    name='description'
                    content='Mini Exercises - from the Modern React Bootcamp by Colt Steele'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{' '}
                    <a
                        href='https://www.udemy.com/course/modern-react-bootcamp/'
                        target='blank'
                        rel='noreferrer'
                    >
                        Casino!
                    </a>
                </h1>

                <p className={styles.description}>
                    Choose a <code className={styles.code}>game</code> to play:
                </p>

                <div className={styles.grid}>
                    <Link href='/slotmachine'>
                        <a className={styles.card}>
                            <h2>Meow Slot Machine &rarr;</h2>
                            <p>
                                A slot machine featuring meows.{' '}
                                <small>(Section 3: Props & More)</small>
                            </p>
                        </a>
                    </Link>

                    <Link href='/pokedex'>
                        <a className={styles.card}>
                            <h2>Pokedex &rarr;</h2>
                            <p>
                                Pokemon cards game{' '}
                                <small>(Section 5: Pokedex Project)</small>
                            </p>
                        </a>
                    </Link>

                    <Link href='/rolldice'>
                        <a className={styles.card}>
                            <h2>Dice Roller &rarr;</h2>
                            <p>
                                It rolls dice.{' '}
                                <small>
                                    (Section 7: React State Dice Exercise)
                                </small>
                            </p>
                        </a>
                    </Link>

                    <Link href='/lotto'>
                        <a className={styles.card}>
                            <h2>Lotto &rarr;</h2>
                            <p>
                                Some random lotto numbers.{' '}
                                <small>(Section 8: React State Patterns)</small>
                            </p>
                        </a>
                    </Link>

                    <Link href='/coinflipper'>
                        <a className={styles.card}>
                            <h2>Coin Flipper &rarr;</h2>
                            <p>
                                Heads or Tails?{' '}
                                <small>(Section 9: State Exercises)</small>
                            </p>
                        </a>
                    </Link>
                </div>
            </div>

            <footer className={styles.footer}>July - August 2021</footer>
        </div>
    );
}
