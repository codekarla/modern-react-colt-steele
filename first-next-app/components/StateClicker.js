// Section 6: State Clicker Exercise

import React, { Component } from 'react';

export default class StateClicker extends Component {
    /**
     *    Alternate Syntax using Babel:
     */
    state = {
        num: 0,
    };
    handleClick = (e) => {
        let rand = Math.floor(Math.random() * 8) + 1;
        this.setState({ num: rand });
    };

    render() {
        const { num } = this.state;

        return (
            <>
                <h1>State Clicker</h1>
                <h2
                    style={{
                        color: 'dodgerblue',
                        fontSize: '3rem',
                    }}
                >
                    Number is {num}
                </h2>
                <button onClick={this.handleClick}>Click Me!</button>
                {num ? (
                    <h2
                        style={{
                            color: 'hotpink',
                            fontSize: '4rem',
                        }}
                    >
                        {num === 8 ? 'You Win!' : 'Try again.'}
                    </h2>
                ) : (
                    ''
                )}
            </>
        );
    }
}
