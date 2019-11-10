import React, {Component} from 'react';

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
          <h2> Home Page </h2>

          <h3> Register Here <h3>
          <p> ENTER USERNAME TEXT BOX HERE <p>
          <p> ENTER PASSWORD TEXT BOX HERE <p>
          <p> BUTTON FOR SUBMIT <p>

          <h3> Log In Here <h3>
          <p> ENTER USERNAME TEXT BOX HERE <p>
          <p> ENTER PASSWORD TEXT BOX HERE <p>
          <p> BUTTON FOR SUBMIT <p>
        </div>
      );
    }
}

export default LoginScreen;
