import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

  }

  render(){
    return (
      <div className="Song">
        <h3>Song : {this.props.songProp.title}</h3>
        <h4>{this.props.songProp.artist}</h4>
        <textarea cols={80} rows={10} />
        <button type="submit" value="MAKE POST">MAKE POST</button>
      </div>
      )
  }
}

export default Song;
