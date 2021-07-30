import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Tooltip } from 'antd';

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

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{' '}
                    <a
                        href='https://www.udemy.com/course/modern-react-bootcamp/'
                        target='blank'
                    >
                        Casino!
                    </a>
                </h1>

                <p className={styles.description}>
                    Choose a <code className={styles.code}>game</code> to play:
                </p>

                <div className={styles.grid}>
                    <Link href='/pokedex'>
                        <a className={styles.card}>
                            <h2>Pokedex &rarr;</h2>
                            <p>
                                Pokemon cards game{' '}
                                <small>(Section 5: Pokedex Project)</small>
                            </p>
                        </a>
                    </Link>

                    <Link href='/slotmachine' as='/meow-slot-machine'>
                        <a className={styles.card}>
                            <h2>Meow Slot Machine &rarr;</h2>
                            <p>
                                A dumb slot machine featuring meows.{' '}
                                <small>(Section 3: Props & More)</small>
                            </p>
                        </a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>July 2021</footer>
        </div>
    );
}
