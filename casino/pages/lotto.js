import React from 'react';
import Lottery from '../components/Lottery';

export default function Lotto() {
    return (
        <div>
            <h1>Game of Lotto</h1>
            <Lottery title='Lottery' numBalls={6} maxNum={40} />
            <Lottery title='Mini Play' numBalls={4} maxNum={9} />
        </div>
    );
}
