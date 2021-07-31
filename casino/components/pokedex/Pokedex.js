import React from 'react';
import Pokecard from './Pokecard';

export default function Pokedex({ pokemons, xp, isWinner }) {
    const color = isWinner ? { color: '#28FFBF' } : { color: '#FF4C29' };

    return (
        <section
            style={{
                backgroundColor: '#0003',
                padding: 20,
                borderRadius: 30,
                textAlign: 'center',
            }}
        >
            <h1 style={color}>
                {isWinner ? 'This Hand Wins! ' : 'This Hand Lost. '}({xp} Exp)
            </h1>
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
        </section>
    );
}
