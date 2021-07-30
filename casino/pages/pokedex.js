import React from 'react';
import Pokedex from '../components/pokedex/Pokedex';

export default function PokegamePage() {
    return (
        <main
            style={{
                width: '100%',
                padding: 30,
                display: 'grid',
                justifyItems: 'center',
            }}
        >
            <h1>Pokedex</h1>
            <Pokedex />
        </main>
    );
}
