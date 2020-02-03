import React, {Component} from 'react';
import Song from './forms/Song';

class SongsList extends Component {
  constructor(props) {
  super(props);

  this.state = {
    localApiLoaded : false,
    localApiUrl: '',
    songs : [],
    localApiError : true
  }
}

componentDidMount() {
  fetch('http://localhost:8082/songs/list',
  {
    method : 'GET',
    headers : {
      'Authorization' : `Bearer  `,
      'Content-Type' : 'application/json'}})
  .then(response => {return response.json();})
  .then(response => {
      this.setState({
        songs : response
      });
    }).catch(error => {
      this.setState({
        localApiError : false
      })
    })
  }

  render(){
      return (
        <div className="SongsList">
        {this.state.songs ? (
          this.state.songs.map((song, key) => {
        return (
        <div className="localSongDiv">
          <Song key={key} songProp={song}/>
        </div>
        )})
      ) : ''
      }
        </div>
      );
    }
}

export default SongsList;
