import React, {Component} from 'react';
import './Posts';
import Post from './components/Post';

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
  fetch('http://localhost:8083/list')
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
          {this.state.postData ? (this.state.postData.map((postInfo, key) => {
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
