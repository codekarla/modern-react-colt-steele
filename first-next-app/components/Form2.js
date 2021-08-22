import React, { useState, useRef } from 'react';

export default function ContactForm() {
    const [showInput, setShowInput] = useState(false);
    const inputRefr = useRef(null);

    const toggleInput = () => {
        const showIt = !showInput;

        setShowInput(showIt);

        if (showIt) {
            console.log(`focusing:`, inputRefr.current);
            inputRefr.current.focus();
        }
    };

    console.log('ref:', inputRefr.current);

    return (
        <div>
            <input
                ref={inputRefr}
                placeholder='Toggle this'
                style={{
                    opacity: showInput ? 1.0 : 0.0,
                }}
            />
            <br />
            <button onClick={toggleInput}>Click me</button>
            <br />
            <hr />
            <input type='text' />
            <input type='password' />
            <input type='checkbox' />
            <input type='number' />
            <input type='submit' />
        </div>
    );
}
