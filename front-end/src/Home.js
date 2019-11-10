import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import './Home.css';

class Home extends Component {
  render(){
      return (
        <div className="Home">
          <LoginScreen />
      );
    }
}

export default Home;
