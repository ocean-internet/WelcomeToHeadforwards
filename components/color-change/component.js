import React, { Component } from 'react';
import { Text } from 'react-vr';

export default class ColorChange extends Component {
    constructor() {
        super();

        this.state = {textColor: 'white'};
    }

    render() {
        return (
            <Text
                style={{color: this.state.textColor}}
                onEnter={() => this.setState({textColor: 'red'})}
                onExit={() => this.setState({textColor: 'white'})}>
                This text will turn red when you look at it.
            </Text>
        );
    }
}