import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    gap: 1rem;
    padding: 10px 20px;

    h1 {
        flex-grow: 2;
    }

    button {
        width: 180px;
        margin: 10px auto;
        padding: 8px 15px;
        font-size: 1.5rem;
        color: #28ffbf;
        background-color: black;
        border-radius: 30px;
        border: 3px solid #28ffbfcc;
        transition: 200ms ease;

        :hover {
            cursor: pointer;
            color: aqua;
            border-color: aqua;
        }

        :disabled {
            border-color: gray;
            color: gray;
        }
    }
`;

export default function PlayHeader({
    title,
    click,
    btnText = 'PLAY',
    btnDisabled = false,
}) {
    return (
        <Header>
            <h1>{title}</h1>
            <button onClick={click} disabled={btnDisabled}>
                <PlayCircleOutlined /> {btnText}
            </button>
        </Header>
    );
}
