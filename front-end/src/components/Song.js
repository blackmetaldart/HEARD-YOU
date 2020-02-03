import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

  }

handleMakePost(e) {
  e.preventDefault();
  let textarea = this.refs.textarea.value;
  let id = this.props.songProp.id;
  let title = this.props.songProp.title;

  this.makePost(id, title, textarea);
}

makePost(id, title, textarea) {
  fetch(`http://localhost:8083/${id}/makepost`, {
    method : 'POST',
    headers : {
      'Authorization' : `Bearer `,
      'Content-Type' : 'application/json'},
    body : JSON.stringify({
      title : `${title}`,
      text : `${textarea}`,
      songId : `${id}`
      })
  })
  .then((response) => {return response.json();})
  .then((response) => {console.log(response);})
  .catch((error) => {console.log(error);})
}

  render(){
    return (
      <div className="Song">
      <form onSubmit={this.handleMakePost.bind(this)}>
        <h3>Song : {this.props.songProp.title}</h3>
        <h4>{this.props.songProp.artist}</h4>
        <textarea ref="textarea"cols={80} rows={10} />
        <button type="submit" value="MAKE POST">MAKE POST</button>
      </form>
      </div>
      )
  }
}

export default Song;
