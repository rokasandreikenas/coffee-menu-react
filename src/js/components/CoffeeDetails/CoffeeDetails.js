import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CoffeeDetails.css';
import Image from '../Image/Image';


export default class CoffeeDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coffee: ""
        };

    }

    componentDidMount() {
        this.getCoffee();
    }

    getCoffee() {
        let coffeeId = this.props.match.params.id;
        axios.get(`http://localhost:3001/coffee/${coffeeId}`)
            .then(res => {
                this.setState({ coffee: res.data }, () => {
                    console.log(this.state)
                });
            })
            .catch(err => console.log(err));
    }

    deleteCoffee() {
        let coffeeId = this.state.coffee.id;
        axios.delete(`http://localhost:3001/coffee/${coffeeId}`)
            .then(response => {
                this.props.history.push('/');
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="center">
                <div className="item-container1">
                    <div className="photo-to-center">
                        <img className="photo" src={this.state.coffee.photo_url} alt={this.state.coffee.name} />
                    </div>
                    <ul className="collection">
                        <li className="collection-item">Name: {this.state.coffee.name}</li>
                        <li className="collection-item">Price: {this.state.coffee.price}$</li>
                        <li className="collection-item">Description: {this.state.coffee.description}</li>
                        <li className="collection-item">Photo url: {this.state.coffee.photo_url}</li>
                    </ul>

                    <div className="add-coffee-button">
                        <button onClick={this.deleteCoffee.bind(this)} className="btn red right">Delete</button>
                        <Link className="btn grey right" to="/">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}