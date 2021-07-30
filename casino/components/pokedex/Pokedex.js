import React from 'react';

import pokemons from '../../data/pokedex';
import Pokecard from './Pokecard';

export default function Pokedex() {
    return (
        <section>
            {pokemons.map((p) => (
                <Pokecard pokemon={p} key={p.id} />
            ))}
        </section>
    );
}
