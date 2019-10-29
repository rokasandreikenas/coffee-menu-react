import React, { Component } from 'react';
import './Image.css'
export default class Image extends Component {
    render() {
        return (
            <div className="img-container">
                <img src={this.props.source} alt={this.props.text} />
            </div>

        )
    }
}