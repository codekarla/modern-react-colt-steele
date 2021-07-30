import React from 'react';
import Pokecard from './Pokecard';

export default function Pokedex({ pokemons }) {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                backgroundColor: '#0003',
                padding: 20,
                borderRadius: 30,
            }}
        >
            {pokemons.map((p) => (
                <Pokecard pokemon={p} key={p.id} />
            ))}
        </div>
    );
}
