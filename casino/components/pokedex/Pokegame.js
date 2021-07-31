import React, { useState } from 'react';
import pokemons from '../../data/pokedex';
import Pokedex from './Pokedex';
import PlayHeader from '../PlayHeader';

export default function Pokegame() {
    const [hands, setHands] = useState([[], []]);
    const [xps, setXps] = useState([null, null]);

    const handleClick = () => {
        const hand1 = [];
        const hand2 = [...pokemons];

        while (hand1.length < hand2.length) {
            let i = Math.floor(Math.random() * hand2.length);
            let rand = hand2.splice(i, 1)[0];
            hand1.push(rand);
        }

        let xp1 = hand1.reduce((sum, p) => sum + p.base_experience, 0);
        let xp2 = hand2.reduce((sum, p) => sum + p.base_experience, 0);

        setHands([hand1, hand2]);
        setXps([xp1, xp2]);
    };

    return (
        <>
            <PlayHeader title='Pokedex Game' click={handleClick} />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 20,
                }}
            >
                <Pokedex
                    pokemons={hands[0]}
                    xp={xps[0]}
                    isWinner={xps[0] > xps[1]}
                />
                <Pokedex
                    pokemons={hands[1]}
                    xp={xps[1]}
                    isWinner={xps[1] > xps[0]}
                />
            </div>
        </>
    );
}
