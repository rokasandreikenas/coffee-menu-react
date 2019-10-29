import React, { Component } from 'react';
export default class Price extends Component {
    render() {
        return (<p>{this.props.price}$</p>)
    }
}