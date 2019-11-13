import React, {Component} from 'react';

class UserProfile extends Component {
  render(){
    return (
      <div>
        <h3>USER : {this.props.userDataProp.username} [{this.props.userDataProp.firstName} {this.props.userDataProp.lastName}]</h3>
        <h4>{this.props.userDataProp.email}</h4>
      </div>
      )
  }
}

export default UserProfile;
