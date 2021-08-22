import React, { useState } from 'react';
import PlayHeader from '../PlayHeader';
import styles from '../../styles/CoinFlipper.module.css';
import { shake } from '../../styles/shake.module.css';

function CoinFlipper() {
    const [numFlips, setNumFlips] = useState(0);
    const [numHeads, setNumHeads] = useState(0);
    const [numTails, setNumTails] = useState(0);

    const [isHead, setIsHead] = useState(true);
    const [isFlipping, setIsFlipping] = useState(false);

    const flipCoin = () => {
        setIsFlipping(true);

        const face = Math.random() * 4 >= 2;
        // console.log('random face:', face);

        // animation
        for (let timeout = 300; timeout <= 1400; timeout += 150) {
            // console.log(timeout);
            setTimeout(() => {
                setIsHead((s) => !s);
            }, timeout);
        }

        setTimeout(() => {
            setIsHead(face);
            setIsFlipping(false);

            setNumFlips(numFlips + 1);

            if (face) {
                // it's a head
                setNumHeads(numHeads + 1);
            } else {
                setNumTails(numTails + 1);
            }
        }, 1500);
    };

    let flipStr = `Out of ${numFlips} flips, there have been ${numHeads} heads and ${numTails} tails.`;
    let flipImg = `../coins/coin-${isHead ? 'head' : 'tail'}.jpg`;
    let flipStyle = isFlipping ? shake : '';

    // console.log(numFlips, numHeads, numTails);

    return (
        <article className={styles.coinflipper}>
            <PlayHeader
                title='Coin Flipper'
                click={flipCoin}
                btnText='Flip Me!'
            />
            <h3 className={styles.flipstr}>{flipStr}</h3>
            <section className={styles.imagebox}>
                <img src={flipImg} className={flipStyle} />
            </section>
        </article>
    );
}

export default CoinFlipper;
