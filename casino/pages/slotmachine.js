import { useState } from 'react';
import Head from 'next/head';
import { PlayCircleOutlined } from '@ant-design/icons';

import SlotMachine from '../components/SlotMachine';
import styles from '../styles/SlotMachine.module.css';

export default function Meow() {
    const [cats, setCats] = useState([0, 0, 0]);
    const [gameStatus, setGameStatus] = useState('start'); // start | winner | loser

    const handleClick = async () => {
        setGameStatus('playing');
        await setCats([]);

        const newCats = [];
        for (let i = 0; i < 3; i++) {
            newCats.push(Math.floor(Math.random() * 5));
        }

        console.log(newCats.join(' - '));
        setCats(newCats);

        setTimeout(() => {
            if (newCats[0] === newCats[1] && newCats[1] === newCats[2]) {
                setGameStatus('winner');
            } else {
                setGameStatus('loser');
            }
        }, 300);
    };

    return (
        <>
            <Head>
                <title>Meow Slot Machine</title>
                <meta
                    name='description'
                    content='A dumb slot machine featuring meows.'
                />
            </Head>
            <main className={styles.meowpage}>
                <h1>Meow Slot Machine</h1>
                <h2>
                    {gameStatus === 'start'
                        ? 'Click PLAY!'
                        : gameStatus === 'winner'
                        ? 'YOU WIN!'
                        : gameStatus === 'loser'
                        ? 'YOU LOSE!'
                        : '. . . .'}
                </h2>
                <SlotMachine cats={cats} />
                <button onClick={handleClick}>
                    <PlayCircleOutlined /> PLAY
                </button>
            </main>
        </>
    );
}
