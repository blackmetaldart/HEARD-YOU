import React from 'react';

function Post(props) {
    return (
      <div className="Post">
        <h3>{this.props.postProp.title} [{this.props.postProp.username}]</h3>
        <p>{this.props.postProp.description}</p>
      </div>
      )

}

export default Post;
