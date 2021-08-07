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
    const [isRolling, setRolling] = useState(false);

    const roll = () => sides[Math.floor(Math.random() * sides.length)];

    const handleClick = () => {
        setRolling(true);
        setTimeout(() => {
            setDie1(roll());
            setDie2(roll());
            setRolling(false);
        }, 1000);
    };

    return (
        <>
            <PlayHeader
                title='Dice Roller'
                btnText={isRolling ? 'Rolling...' : 'Roll Dice'}
                click={handleClick}
                btnDisabled={isRolling}
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
                <Die face={die1} rolling={isRolling} />
                <Die face={die2} rolling={isRolling} />
            </div>
        </>
    );
}
