import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 250px;
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    border: 2px solid #fff7;
    border-radius: 25px;
    transition: 200ms ease;

    img {
        transition: 150ms ease-in-out;
    }

    :hover {
        border-color: #fff;

        img {
            transform: scale(1.5);
        }
    }
`;

export default function Pokecard({ pokemon }) {
    const { name, id, type, base_experience } = pokemon;
    let newId = `${id}`.padStart(3, '0');

    return (
        <Card>
            <h3>{name}</h3>
            <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`}
            />
            <p>TYPE: {type}</p>
            <p>EXP: {base_experience}</p>
        </Card>
    );
}
