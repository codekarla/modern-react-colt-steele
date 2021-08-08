import React from 'react';
import { shake2 as shakeStyle } from '../../styles/shake.module.css';

export default function Ball({ num }) {
    return (
        <div
            className={shakeStyle}
            style={{
                border: '5px solid #FF8303',
                backgroundColor: '#FF8303bb',
                color: 'white',
                borderRadius: '50%',
                width: 100,
                height: 100,
                fontSize: 40,
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {num}
        </div>
    );
}
