import React from 'react';
import Pokedex from '../components/pokedex/Pokedex';

export default function Pokegame() {
    return (
        <main style={{ width: '100%', padding: '2rem 10%' }}>
            <h1>Pokedex Game</h1>
            <Pokedex />
        </main>
    );
}
