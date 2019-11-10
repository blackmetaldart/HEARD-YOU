import React, {Component} from 'react';

class Post extends Component {
  render(){
    return (
      <div>
        <h3>Post : {this.props.postProp.title} [{this.props.postProp.songLength} mins]</h3>
        <h4>{this.props.postProp.artist[0]}</h4>
      </div>
      )
  }
}

export default Post;
