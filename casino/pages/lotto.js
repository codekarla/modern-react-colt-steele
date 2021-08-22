import React from 'react';
import Lottery from '../components/Lottery';

export default function Lotto() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: 20 }}>Game of Lotto</h1>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    gap: 30,
                    justifyContent: 'center',
                }}
            >
                <Lottery title='Lottery' numBalls={6} maxNum={40} />
                <Lottery title='Mini Play' numBalls={4} maxNum={9} />
            </div>
        </div>
    );
}
