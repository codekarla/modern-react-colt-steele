import React from 'react';

export default function Pokedex({ pokemon }) {
    const { name, id, type, base_experience } = pokemon;

    return (
        <div>
            <h3>{name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
            <p>TYPE: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}
