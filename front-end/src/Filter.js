import React, {Component} from 'react';

class Filter extends Component {
  constructor (props) {
    super(props);

    this.state = {
     jwt: '',
   }
  }

  render(){

    if (!this.state.jwt) {
     return (
       <LoginScreen />
     );
   } else if (this.state.jwt) {
     return (
       <Profile />
     );
   }

    }
}

export default Filter;
