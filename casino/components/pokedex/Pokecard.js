import React from 'react';

export default function Pokedex({ pokemon }) {
    const { name, id, type, base_experience } = pokemon;

    return (
        <div
            style={{
                border: '2px solid #fff7',
                borderRadius: 25,
                maxWidth: 200,
                margin: 10,
                padding: '15px 30px',
                textAlign: 'center',
            }}
        >
            <h3>{name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
            <p>TYPE: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}
