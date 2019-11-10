import React, {Component} from 'react';

class Post extends Component {
  render(){
    return (
      <div>
        <h3>Post : {this.props.postProp.username} [{this.props.postProp.title} mins]</h3>
        <h4>{this.props.postProp.description}</h4>
      </div>
      )
  }
}

export default Post;
