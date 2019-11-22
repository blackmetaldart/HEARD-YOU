import React, {Component} from 'react';

class Song extends Component {
  constructor (props){
    super(props);

  }

handleMakePost(e) {
  e.preventDefault();
  let textarea = this.refs.textarea.value;
  this.makePost(textarea);
}

makePost(texarea) {
  fetch("http://localhost:8080/makePost", {
    method : 'POST',
    headers : {
      'Authorization' : `Bearer `,
      'Content-Type' : 'application/json'},
    body : JSON.stringify({
      text : `${textarea}`
      })
  })
  .then((response) => {return response.json();})
  .then((response) => {
    this.setState({
      jwt : response
    })
    console.log(response);})
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
