import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

    this.makePost = this.makePost.bind(this);
    this.state = {
      value : this.props.songProp.songId
    }
  }

makePost = (e) => {
  e.preventDefault();
  let song = document.getElementsByClassName('songDiv');
  const songTitle = song.getAttribute("title");
  let description = song.getAttribute("description");

  console.log(song);
  console.log(songTitle);
  fetch("localhost://8083/" + this.value + "/makepost", {
    method : 'POST',
    headers : {
      'Authorization' : 'Bearer ' + localStorage.getItem('user'),
      'Content-Type' : 'application/json'},
      body : JSON.stringify({
        description : `${description}`,
        username : `${this.props.username}`,
        songId : `${this.state.songId}`
      })
  })
  .then((response) => {return response.json();})
  .then((response) => {console.log(response);})
  .catch((error) => {console.log(error);})

  {/*set state song added true, if true song has been added*/}
}

  render(){
    return (
      <div className ="songDiv" + >
        <h3 data-title={this.props.songProp.title}>Song :{this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4 data-artist={this.props.songProp.artist}>{this.props.songProp.artist}</h4>
        <textarea data-songId={this.props.songId} value={this.props.songId} onChange={this.handleChange} cols={80} rows={30} />
        <input onClick={() => makePost()} type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
