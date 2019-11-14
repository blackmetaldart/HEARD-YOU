import React, {Component} from 'react';
import Song from './components/Song';

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
  fetch('http://localhost:8082/songs/list')
  .then(response => {return response.json();})
  .then(response => {
      console.log(response);
      if(response.error){
        response = false;
      }
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
        {this.state.songs ? (this.state.songs.map((song, key) => {
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
