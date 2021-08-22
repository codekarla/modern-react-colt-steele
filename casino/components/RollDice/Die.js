/** 
    Die - an individual die that takes props and displays the correct face of the die based on props.
*/
import React from 'react';
import styles from '../../styles/shake.module.css';

export default function Die({ face, rolling }) {
    return (
        <img
            className={rolling ? styles.shake : ''}
            src={face ? `dice/die-${face}.svg` : ''}
            alt={face || 'Die'}
            width='250'
            height='250'
        />
    );
}
