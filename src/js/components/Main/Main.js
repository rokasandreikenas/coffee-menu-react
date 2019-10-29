import React, { Component } from 'react';


import { HashRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../Menu/Menu.jsx';
import CoffeeDetails from '../CoffeeDetails/CoffeeDetails.js';
import AddCoffee from '../AddCoffee/AddCoffee';

const Main = () => {
    return (
        <HashRouter basename='/'>
            <div>
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route exact path='/cd' component={Menu} />
                    <Route exact path='/add' component={AddCoffee} />
                    <Route exact path='/:id' component={CoffeeDetails} />
                </Switch>
            </div>
        </HashRouter>


    )
}


export default Main;