import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

    this.makePost = this.makePost.bind(this);
  }

makePost = (e) => {
  e.preventDefault();
  let song = document.getElementsByClassName('songDiv')
  const songTitle = song[0].getAttribute("title")
  console.log(song);
  console.log(songTitle);
  fetch("localhost://8083/" + this.value + "/makepost", {
    method : 'POST',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
      body : JSON.stringify({
        description : `${description}`, {/*add data-description*/}
        username : `${username}`, {/*add data-username*/}
        songId : `${this.props.songId}`
      })
  })
  .then((response) => {return response.json();})
  .then((response) => {console.log(response);})
  .catch((error) => {console.log(error);})

  {/*MAKE SURE THAT AFTER REGISTRATION  THE SCREEN SWITCHES TO THE PROFILE COMPONENT*/}

  {/*set state song added true, if true song has been added*/}
}

  render(){
    return (
      <div className ="songDiv" >
        <h3 data-title={this.props.songProp.title}>Song :{this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4>{this.props.songProp.artist}</h4>
        <textarea value={this.props.songId} onChange={this.handleChange} cols={80} rows={30} />
        <input onClick={() => makePost()} type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
