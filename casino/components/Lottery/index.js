import React, { useState } from 'react';
import PlayHeader from '../PlayHeader';
import Ball from './Ball';

export default function Lottery({ title, numBalls, maxNum }) {
    const [balls, setBalls] = useState([]);

    const random = (max) => Math.floor(Math.random() * max) + 1;
    const handleClick = () => {
        const arr = Array.from({ length: numBalls }, () => random(maxNum));
        setBalls(arr);
    };

    return (
        <section
            style={{
                border: '5px double #000c',
                borderRadius: 20,
                margin: 30,
            }}
        >
            <PlayHeader title={title} click={handleClick} />

            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    gap: 20,
                    padding: '0 30px 30px',
                }}
            >
                {balls.map((num, i) => (
                    <Ball num={num} key={`${title}-${i}--${num}`} />
                ))}
            </div>
        </section>
    );
}
