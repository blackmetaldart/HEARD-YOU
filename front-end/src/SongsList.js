import React, {Component} from 'react';

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
      this.setState({
        songs : response
      });
    }).catch(error => {
      this.setState({
        localApiError : false
      })
    })

  render(){
      return (
        <div className="SongsList">

        </div>
      )
    }
}

export default SongsList;
