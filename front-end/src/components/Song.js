import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);


  }

makePost = (post) => {
  fetch("localhost://8083/{username}/makepost", {
    method : 'POST',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
      body : JSON.stringify({
        description : `${description}`,
        username : `${username}`,
        songId : `${songId}`
      })
  })
  .then((response) => ({return response.json()}))
  .then((response) => ())
  .catch((error) => ())

  {/*MAKE SUER THAT AFTER REGISTRATION  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}
}

  render(){
    return (
      <div>
        <h3>Song : {this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4>{this.props.songProp.artist[0]}</h4>
        <input onClick={() = makePost()} type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
