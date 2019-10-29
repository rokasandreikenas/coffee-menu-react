import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddCoffee.css';

export default class AddCoffee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameError: false,
            priceError: false,
            urlError: false,
            valid: false,
        };

    }


    addCoffee(newCoffee) {
        axios.request({
            method: 'post',
            url: 'http://localhost:3001/coffee',
            data: newCoffee
        }).then(respone => {
            this.props.history.push('/');
            console.log(newCoffee);
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.refs.name.value === "" && this.refs.price.value === "" && this.refs.photo_url.value === "") {
            this.setState({
                nameError: "Please fill name blank!",
                priceError: "Please fill price blank!",
                urlError: "Please fill photo url blank!",
            })
        }

        else if (this.refs.name.value === "" && this.refs.price.value === "" && this.refs.photo_url.value !== "") {
            this.setState({
                nameError: "Please fill name blank!",
                priceError: "Please fill price blank!",
                urlError: false,
            })
        }

        else if (this.refs.name.value === "" && this.refs.price.value !== "" && this.refs.photo_url.value !== "") {
            this.setState({
                nameError: "Please fill name blank!",
                priceError: false,
                urlError: false,
            })
        }

        else if (this.refs.name.value !== "" && this.refs.price.value !== "" && this.refs.photo_url.value === "") {
            this.setState({
                nameError: false,
                priceError: false,
                urlError: "Please fill photo url blank!",
            })
        }

        else if (this.refs.name.value !== "" && this.refs.price.value === "" && this.refs.photo_url.value === "") {
            this.setState({
                nameError: false,
                priceError: "Please fill price blank!",
                urlError: "Please fill photo url blank!",
            })
        }

        else if (this.refs.name.value !== "" && this.refs.price.value === "" && this.refs.photo_url.value !== "") {
            this.setState({
                nameError: false,
                priceError: "Please fill price blank!",
                urlError: false,
            })
        }

        else if (this.refs.name.value === "" && this.refs.price.value !== "" && this.refs.photo_url.value === "") {
            this.setState({
                nameError: "Please fill name blank!",
                priceError: false,
                urlError: "Please fill photo url blank!",
            })
        }

        else {
            this.setState({
                nameError: false,
                priceError: false,
                urlError: false,

            })

            const newCoffee = {
                name: this.refs.name.value,
                price: this.refs.price.value,
                description: this.refs.description.value,
                photo_url: this.refs.photo_url.value,
            }
            this.addCoffee(newCoffee);
            console.log(newCoffee);
            e.preventDefault();
        }
    }


    render() {

        return (
            <div>
                <br />
                <div className="center">
                    <div className="component-item-add-coffee">
                        <h1>Add coffee: </h1>
                        <form className="add-coffee-input-fields" onSubmit={this.onSubmit.bind(this)}>
                            <div className="input-field">
                                <input type="text" name="name" ref="name" placeholder="Name" className="validate" />
                                <span className="help-is-danger">{this.state.nameError}</span>
                            </div>
                            <div className="input-field">
                                <input type="text" name="price" ref="price" placeholder="Price" className="validate" />
                                <span className="help-is-danger">{this.state.priceError}</span>
                            </div>
                            <div className="input-field">
                                <input type="text" name="description" ref="description" placeholder="Description" className="validate" />
                            </div>
                            <div className="input-field">
                                <input type="text" name="photo_url" ref="photo_url" placeholder="Photo link(url)" className="validate" />
                                <span className="help-is-danger">{this.state.urlError}</span>
                            </div>
                            <div className="add-coffee-buttons">
                                <Link className="btn grey" to="/">Back</Link>
                                <input type="submit" value="Save" className="btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}