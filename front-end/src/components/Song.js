import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

  }

  render(){
    return (
      <div>
        <h3>Song : {this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4>{this.props.songProp.artist}</h4>
        <textarea cols={80} rows={10} />
        <button type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
