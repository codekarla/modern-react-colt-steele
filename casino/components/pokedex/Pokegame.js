import React from 'react';
import pokemons from '../../data/pokedex';
import Pokedex from './Pokedex';

export default function Pokegame() {
    let length = pokemons.length / 2;
    const array1 = pokemons.slice(0, length);
    const array2 = pokemons.slice(length);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
            }}
        >
            <Pokedex pokemons={array1} />
            <Pokedex pokemons={array2} />
        </div>
    );
}
