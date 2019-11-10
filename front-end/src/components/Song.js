import React, {Component} from 'react';

class Song extends Component {
  render(){
    return (
      <div>
        <h3>Song : {this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4>{this.props.songProp.artist[0]}</h4>
      </div>
      )
  }
}

export default Song;
