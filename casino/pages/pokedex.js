import React from 'react';
import Pokegame from '../components/pokedex/Pokegame';

export default function PokegamePage() {
    return (
        <main
            style={{
                width: '100%',
                padding: 30,
                textAlign: 'center',
            }}
        >
            <h1>Pokedex Game</h1>
            <Pokegame />
        </main>
    );
}
