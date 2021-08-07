/** 
    Die - an individual die that takes props and displays the correct face of the die based on props.
*/
import React from 'react';

export default function Die({ face = 'one' }) {
    return (
        <img
            src={`dice/die-${face}.svg`}
            alt={face}
            style={{
                width: '40%',
                maxWidth: 500,
                height: 'auto',
            }}
        />
    );
}
