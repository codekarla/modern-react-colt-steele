// Section 6: Introducing State (Class-based)

import React, { Component } from 'react';

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    makeTime() {
        let interval = this.props.interval || 500;
        setInterval(() => {
            let max = this.props.maxNum || 100;
            let rand = Math.floor(Math.random() * max);
            this.setState({ num: rand });
        }, interval);
    }

    handleClick(e) {
        this.makeTime();
        this.setState({ clicked: true });
    }

    render() {
        return (
            <h1 style={{ color: 'hotpink' }}>
                {this.props.name || 'Rando'}:{' '}
                <span style={{ color: 'dodgerblue' }}>{this.state.num}</span>{' '}
                {!this.state.clicked && (
                    <button onClick={this.handleClick}>Play</button>
                )}
            </h1>
        );
    }
}

export default Rando;
