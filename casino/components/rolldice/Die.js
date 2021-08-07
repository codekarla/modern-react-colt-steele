/** 
    Die - an individual die that takes props and displays the correct face of the die based on props.
*/
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    .shake {
        animation: shakenbounce 1500ms ease infinite;
    }
    @keyframes shakenbounce {
        0%,
        70% {
            transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
            transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
            transform: translateX(10px);
        }

        70% {
            transform: translateY(0%);
        }
        80% {
            transform: translateY(-15%);
        }
        90% {
            transform: translateY(0%);
        }
        95% {
            transform: translateY(-7%);
        }
        97% {
            transform: translateY(0%);
        }
        99% {
            transform: translateY(-3%);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export default function Die({ face, rolling }) {
    return (
        <Div>
            <img
                className={rolling ? 'shake' : ''}
                src={face ? `dice/die-${face}.svg` : ''}
                alt={face || 'Die'}
                width='300'
                height='300'
            />
        </Div>
    );
}
