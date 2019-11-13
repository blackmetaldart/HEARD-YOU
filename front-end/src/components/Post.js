import React, {Component} from 'react';

class Post extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.postProp.title} [{this.props.postProp.username}]</h3>
        <h4>{this.props.postProp.description}</h4>
      </div>
      )
  }
}

export default Post;
