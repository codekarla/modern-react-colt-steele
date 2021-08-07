/** 
    RollDice - a parent component (rendered by App) that renders the dice and a button to roll.
*/

import React, { useState } from 'react';
import Die from './Die';
import PlayHeader from '../PlayHeader';

const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

export default function RollDice() {
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');

    const roll = () => sides[Math.floor(Math.random() * sides.length)];

    const handleClick = () => {
        setDie1(roll());
        setDie2(roll());
    };

    return (
        <>
            <PlayHeader
                title='Dice Roller'
                btnText='Roll Dice'
                click={handleClick}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '9%',
                    padding: 20,
                    color: 'pink',
                }}
            >
                <Die face={die1} />
                <Die face={die2} />
            </div>
        </>
    );
}
