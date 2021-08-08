import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import styles from '../styles/PlayHeader.module.css';

export default function PlayHeader({
    title,
    click,
    btnText = 'PLAY',
    btnDisabled = false,
}) {
    return (
        <header className={styles.playheader}>
            <h1>{title}</h1>
            <button onClick={click} disabled={btnDisabled}>
                <PlayCircleOutlined /> {btnText}
            </button>
        </header>
    );
}
