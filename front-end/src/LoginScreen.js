import React, {Component} from 'react';
import Login from './components/Login';
import Register from './components/Register';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class LoginScreen extends Component {
  constructor (props) {
    super(props);
  }

  render(){
      return (
        <div className="LoginScreen">
            <Router>
              <div className="registerNav">
                <nav>
                  <Link to="/register">Register</Link>{'  '}
                  <Link to="/login">Log In</Link>{'  '}
                </nav>
                <Route exact path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
              </div>
            </Router>
        </div>
      );
    }
}

export default LoginScreen;
