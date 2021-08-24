import React, { useState } from 'react';
import { getRandomColor } from './colors';

function Box() {
    const initialState = getRandomColor();
    const [color, setColor] = useState(initialState);

    const handleClick = () => {
        let newColor;

        do {
            newColor = getRandomColor();
        } while (color.id === newColor.id);

        setColor(newColor);
    };

    return (
        <article
            className='box'
            onClick={handleClick}
            style={{ backgroundColor: color.code.hex }}
        >
            <p>{color.color}</p>
        </article>
    );
}

export default Box;
