import React from 'react';
import { padZeroes } from '../../utils';

export default function Pokedex({ pokemon }) {
    const { name, id, type, base_experience } = pokemon;
    let newId = `${id}`.padStart(3, '0');

    return (
        <div
            style={{
                border: '2px solid #fff7',
                borderRadius: 25,
                maxWidth: 300,
                margin: 10,
                padding: '15px 30px',
                textAlign: 'center',
            }}
        >
            <h3>{name}</h3>
            <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`}
            />
            <p>TYPE: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}
