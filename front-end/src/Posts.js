import React, {Component} from 'react';
import Post from './components/Post.js';

class Posts extends Component {
  constructor(props) {
  super(props);

  this.state = {
    localApiLoaded : false,
    localApiUrl: '',
    postsData : [],
    localApiError : true
  }
}

componentDidMount() {
  fetch('http://3.95.190.64:8083/posts/list',
  {
    method : 'GET',
    headers : {
      'Authorization' : `Bearer  `,
      'Content-Type' : 'application/json'}})
  .then(response => {return response.json();})
  .then(response => {
      console.log(response);
      this.setState({
        postsData : response
      });
    }).catch(error => {
      this.setState({
        localApiError : false
      })
    })

  }

  render(){
      return (
        <div className="Posts">
          <h2> The Posts For The Week </h2>
          <div className="postListDiv">
          {this.state.postsData ? (
            this.state.postsData.map((postInfo, key) => {
          return (
          <div className="postDiv">
            <Post key={key} postProp={postInfo}/>
          </div>
          )})
        ) : ''
        }
          </div>
        </div>
      );
    }
}

export default Posts;
