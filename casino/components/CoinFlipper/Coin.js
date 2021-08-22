import styles from '../../styles/CoinFlipper.module.css';
import { shake } from '../../styles/shake.module.css';

import React from 'react';

function Coin({ isHead, isFlipping }) {
    let flipImg = `../coins/coin-${isHead ? 'head' : 'tail'}.jpg`;
    let flipStyle = isFlipping ? shake : '';

    return (
        <section className={styles.imagebox}>
            <img src={flipImg} className={flipStyle} />
        </section>
    );
}

export default Coin;
