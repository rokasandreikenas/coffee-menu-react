import React, { Component } from 'react';
import Image from '../Image/Image';
import Price from '../Price/Price';
import { Link } from 'react-router-dom';
import './CoffeeCard.css'
export default class CoffeeCard extends Component {



    render() {
        return (
            <div className="item-container">
                {this.props.coffee.map((item, id) => {
                    return (
                        <div className="coffee-card-container"
                            key={id}>
                            <Image source={item.photo_url} text={item.name} />
                            <Link className="coffee-card-p-box" to={`/${item.id}`}>{item.name}</Link>
                            <Price className="coffee-card-p-box" price={item.price} />
                        </div>
                    )
                })}
            </div>
        )
    }
}