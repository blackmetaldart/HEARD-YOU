import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class LoginScreen extends Component {
  render(){
      return (
        <div className="LoginScreen">
            <Router>
              <div className="registerNav">
                <nav>
                  <Link to="/register">Register</Register>{'  '}
                  <Link to="/login">Log In</Login>{'  '}
                </nav>
                <Route exact path="/register" component={Register} />
                <Route path="/login" component={Login} />
              </div>
            </Router>
        </div>
      );
    }
}

export default LoginScreen;
