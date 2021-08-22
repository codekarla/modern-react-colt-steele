import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const MenuIcon = () => (
    <svg
        version='1.1'
        id='Layer_1'
        x='0px'
        y='0px'
        width='122.879px'
        height='103.609px'
        viewBox='0 0 122.879 103.609'
    >
        <g>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z'
            ></path>
        </g>
    </svg>
);

const CasinoLinks = () => (
    <>
        <Link href='/slotmachine'>
            <a>Slot Machine</a>
        </Link>
        <Link href='/pokedex'>
            <a>Pokedex</a>
        </Link>
        <Link href='/rolldice'>
            <a>Dice Roller</a>
        </Link>
        <Link href='/lotto'>
            <a>Lotto</a>
        </Link>
        <Link href='/coinflipper'>
            <a>Coin Flipper</a>
        </Link>
    </>
);

export default function MyNavbar() {
    const [isBurgerOn, setBurgerOn] = useState(false);
    const toggleBurger = () => setBurgerOn((s) => !s);
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <div className={styles.collapse}>
                <CasinoLinks />
            </div>
            <a className={styles.burger} onClick={toggleBurger}>
                <MenuIcon />
            </a>
            <div
                onClick={toggleBurger}
                className={styles.burgermenu}
                style={{ display: isBurgerOn ? 'flex' : 'none' }}
            >
                <CasinoLinks />
            </div>
        </nav>
    );
}
