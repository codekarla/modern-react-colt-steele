import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function MyNavbar() {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>Home</a>
            </Link>
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
        </nav>
    );
}
