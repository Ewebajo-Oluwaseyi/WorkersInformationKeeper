import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Register from './auth/Register'
import Login from './auth/Login';
import PrivateRoute from './routing/PrivateRoute'


function main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <PrivateRoute exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </Router>
        </div>
    )
}

export default main
