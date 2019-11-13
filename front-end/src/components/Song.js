import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

    this.makePost = this.makePost.bind(this);
  }

makePost = () => {
  e.preventDefault();
  fetch("localhost://8083/" + this.value + "/makepost", {
    method : 'POST',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
      body : JSON.stringify({
        description : `${description}` {/*USE ID AND INNER TEXT*/},
        username : `${username}`{/*USE STORED USERNAME*/},
        songId : `${this.props.songId}`
      })
  })
  .then((response) => {return response.json();})
  .then((response) => {console.log(response);})
  .catch((error) => {console.log(error);})

  {/*MAKE SURE THAT AFTER REGISTRATION  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}
  {/*MAKE SURE THAT THE PAGE DOES NOT REFRESH*/}
  {/*MAKE SURE THAT THE PAGE ALERTS THAT A POST WAS MADE*/}
}

  render(){
    return (
      <div className = >
        <h3>Song : {this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4>{this.props.songProp.artist}</h4>
        <textarea value={this.props.songId} onChange={this.handleChange} cols={80} rows={30} />
        <input onClick={() => makePost()} type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
