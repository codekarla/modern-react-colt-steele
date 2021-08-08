import React from 'react';
import PlayHeader from '../PlayHeader';
import Ball from './Ball';

export default function Lottery({ title, numBalls, maxNum }) {
    const handleClick = () => {};

    return (
        <section
            style={{
                border: '2px double #fffb',
                borderRadius: 20,
                margin: 30,
            }}
        >
            <PlayHeader title={title} click={handleClick} />

            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    gap: 20,
                    padding: '0 30px 30px',
                }}
            >
                <Ball num={numBalls} />
                <Ball num={maxNum} />
                <Ball num={numBalls} />
                <Ball num={maxNum} />
            </div>
        </section>
    );
}
