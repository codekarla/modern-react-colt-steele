import React from 'react';

import pokemons from '../../data/pokedex';
import Pokecard from './Pokecard';

export default function Pokedex() {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
            }}
        >
            {pokemons.map((p) => (
                <Pokecard pokemon={p} key={p.id} />
            ))}
        </div>
    );
}
