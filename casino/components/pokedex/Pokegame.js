import React from 'react';
import pokemons from '../../data/pokedex';
import Pokedex from './Pokedex';

export default function Pokegame() {
    const hand1 = [];
    const hand2 = [...pokemons];

    while (hand1.length < hand2.length) {
        let i = Math.floor(Math.random() * hand2.length);
        let rand = hand2.splice(i, 1)[0];
        hand1.push(rand);
    }

    // console.log(hand1, hand2);

    let xp1 = hand1.reduce((sum, p) => sum + p.base_experience, 0);
    let xp2 = hand2.reduce((sum, p) => sum + p.base_experience, 0);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
            }}
        >
            <Pokedex pokemons={hand1} xp={xp1} isWinner={xp1 > xp2} />
            <Pokedex pokemons={hand2} xp={xp2} isWinner={xp2 > xp1} />
        </div>
    );
}
