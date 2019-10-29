import React, { Component } from 'react';
export default class DeleteCoffee extends Component {

    deleteCoffee() {
        let coffeeId = this.props.coffee.id;
        axios.delete(`http://localhost:3001/coffee/${coffeeId}`)
            .then(response => {
                console.log(coffeeId);
                console.log("sudassudas")
            }).catch(err => console.log(err));
    }

    render() {
        return (

            <button onClick={this.deleteCoffee}> Delete </button>
        )
    }
}