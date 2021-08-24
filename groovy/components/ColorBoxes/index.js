import React, { useEffect, useState } from 'react';
import Box from './Box';
import styles from './color.module.scss';

function ColorBoxes() {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        let cols = Math.floor(window.innerWidth / 220);
        let rows = Math.floor(window.innerHeight / 220) * 2;
        let numBoxes = cols * rows;

        const arr = Array.from({ length: numBoxes }).map((d, i) => (
            <Box key={'clrbx' + i} />
        ));

        setBoxes(arr);
    }, []);

    return <section className={styles.container}>{boxes}</section>;
}

export default ColorBoxes;
