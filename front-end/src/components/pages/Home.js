import React, {Component} from 'react';
import LoginScreen from './LoginScreen';

class Home extends Component {
  constructor (props) {
    super(props);

  }

  render(){
      return (
        <div className="Home">
          <LoginScreen />
        </div>
      );
    }
}

export default Home;
