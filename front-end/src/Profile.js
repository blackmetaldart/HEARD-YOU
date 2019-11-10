import React, {Component} from 'react';
import './Profile.css';
import UserProfile from './components/UserProfile';

class Profile extends Component {
  constructor(props) {
  super(props);

  this.state = {
    localApiLoaded : false,
    localApiUrl: '',
    userData : [],
    localApiError : true
  }
}

componentDidMount() {
  fetch('http://localhost:8081/{username}/profile')
  .then(response => {return response.json();})
  .then(response => {
      console.log(response);
      this.setState({
        userData : response
      });
    }).catch(error => {
      this.setState({
        localApiError : false
      })
    })
  }
  render(){
      return (
        <div className="Profile">
            <h2> Account Profile </h2>
            <div className="userProfile">
            {this.state.userData ? (this.state.userData.map((userInfo, key) => {
            return (
            <div className="userProfileDiv">
              <UserProfile key={key} userDataProp={userInfo}/>
            </div>
            )})
          ) : ''
          }
            </div>
        </div>
      );
    }
}

export default Profile;
