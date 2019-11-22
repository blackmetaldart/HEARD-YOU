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
