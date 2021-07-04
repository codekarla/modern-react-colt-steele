import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

import SlotMachine from '../components/SlotMachine';
import { getRandomCat } from '../utils/slotmachine';
import styles from '../styles/SlotMachine.module.css';

export default function Meow({ data }) {
    const [cats, setCats] = useState([data[0], data[0], data[0]]);
    const [gameStatus, setGameStatus] = useState('start'); // start | winner | loser

    const handleClick = async () => {
        setGameStatus('playing');
        await setCats([]);
        const newCats = [];
        for (let i = 0; i < 3; i++) {
            newCats.push(getRandomCat(data));
        }

        console.log(newCats);
        setCats(newCats);

        setTimeout(() => {
            if (
                newCats[0].id === newCats[1].id &&
                newCats[1].id === newCats[2].id
            ) {
                setGameStatus('winner');
            } else {
                setGameStatus('loser');
            }
        }, 1000);
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
                        ? 'Congratulations! You Win!'
                        : gameStatus === 'loser'
                        ? 'Oops, you lost, try again!'
                        : 'Loading Cats . . .'}
                </h2>
                <SlotMachine cats={cats} />
                <button onClick={handleClick}>
                    <PlayCircleOutlined /> PLAY
                </button>
            </main>
        </>
    );
}

export async function getStaticProps() {
    try {
        require('dotenv').config();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.CAT_APIKEY || 'DEMO-API-KEY',
            },
            params: {
                format: 'json',
                size: 'med',
                mime_types: 'jpg',
                limit: 8,
            },
        };

        const { data } = await axios.get(
            'https://api.thecatapi.com/v1/images/search',
            config
        );

        console.table(data);

        return {
            props: { data },
        };
    } catch (e) {
        console.log('Something went wrong!\n', e.message);
    }
}
