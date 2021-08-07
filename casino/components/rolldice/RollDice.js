/** 
    RollDice - a parent component (rendered by App) that renders the dice and a button to roll.
*/

import React from 'react';
import Die from './Die';
import PlayHeader from '../PlayHeader';

export default function RollDice() {
    return (
        <>
            <PlayHeader title='Dice Roller' btnText='Roll Dice' />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '9%',
                    padding: 20,
                    color: 'pink',
                }}
            >
                <Die />
                <Die />
            </div>
        </>
    );
}
