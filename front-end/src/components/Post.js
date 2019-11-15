import React, {Component} from 'react';

class Post extends Component {
  constructor (props){
    super(props);

  }

  render(){
    return (
      <div className="Post">
        <h3>{this.props.postProp.title} [{this.props.postProp.username}]</h3>
        <p>{this.props.postProp.description}</p>
      </div>
      )
  }
}

export default Post;
