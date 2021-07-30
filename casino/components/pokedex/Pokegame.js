import React from 'react';
import pokemons from '../../data/pokedex';
import Pokedex from './Pokedex';

export default function Pokegame() {
    let length = pokemons.length / 2;

    const array1 = pokemons.slice(0, length);
    const xp1 = array1
        .map((p) => p.base_experience)
        .reduce((sum, xp) => sum + xp);

    const array2 = pokemons.slice(length);
    const xp2 = array2
        .map((p) => p.base_experience)
        .reduce((sum, xp) => sum + xp);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
            }}
        >
            <Pokedex pokemons={array1} xp={xp1} isWinner={xp1 > xp2} />
            <Pokedex pokemons={array2} xp={xp2} isWinner={xp2 > xp1} />
        </div>
    );
}
