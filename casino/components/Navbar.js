import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.div`
    width: 100%;
    margin: 0;
    padding: 5px 30px;
    background-color: black;

    display: flex;
    flex-flow: row wrap;

    a {
        margin: 5px;
        padding: 5px 10px;
        color: white;
        font-weight: 500;
        letter-spacing: 0.04rem;
        border-radius: 10px;
        transition: 200ms ease;

        :hover {
            color: black;
            background-color: blueviolet;
        }
    }
`;

export default function MyNavbar() {
    return (
        <Nav>
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
        </Nav>
    );
}
