import React from 'react';
import Rando from '../components/Rando';
import StateClicker from '../components/StateClicker';

export default function about() {
    return (
        <>
            <h1>About Page</h1>
            <p>What's up?</p>
            <hr />
            <section style={{ width: '100%', display: 'flex', gap: 20 }}>
                <div style={{ flex: 1 }}>
                    <h2>State Demo</h2>
                    <Rando />
                    <Rando name='Ronda' interval={900} maxNum={1000} />
                    <Rando name='Flash' interval={1500} maxNum={100000000} />
                </div>
                <div style={{ flex: 1 }}>
                    <StateClicker />
                </div>
            </section>
        </>
    );
}
