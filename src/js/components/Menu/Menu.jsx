import React, { Component } from 'react';
import axios from 'axios';
import './Menu.css';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { Link } from 'react-router-dom';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coffee: {}
        };

    }

    componentDidMount() {
        this.getCoffees();
    }

    getCoffees() {
        const URL = 'http://localhost:3001/coffee';
        axios.get(URL)
            .then(res => {
                const coffeesArray = [];
                res.data.map(data => {
                    coffeesArray.push(data);
                })
                console.log(coffeesArray);
                this.setState({ coffee: coffeesArray });
                return coffeesArray;
            })
    }

    render() {
        var data = this.state.coffee
        return (
            <div className="component-menu">
                <h1>Menu</h1>
                <div className="component-item-coffee-list">
                    {data.length > 0 && <CoffeeCard coffee={data} />}
                    <div className="add-button-right"><Link to="/add" className="btn-floating btn-large red">+</Link></div>
                </div>
            </div>
        );
    }
}

export default Menu;