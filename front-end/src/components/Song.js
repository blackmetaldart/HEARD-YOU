import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

    this.makePost = this.makePost.bind(this);
    this.state = {
      value : this.props.songProp.songId
    }
  }

  render(){
    return (
      <div>
        <h3 data-title={this.props.songProp.title}>Song : {this.props.songProp.title} [{this.props.songProp.songLength} mins]</h3>
        <h4 data-artist={this.props.songProp.artist}>{this.props.songProp.artist}</h4>
        <textarea data-songId={this.props.songId} value={this.props.songId} onChange={this.handleChange} cols={80} rows={30} />
        <input type="submit" value="MAKE POST" />
      </div>
      )
  }
}

export default Song;
