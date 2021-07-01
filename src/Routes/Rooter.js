import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Home from "../Home/Home";
import Annims from "../Annim/Annims"
import history from '../History/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Annims" component={Annims} />
                </Switch>
            </Router>
        )
    }
}