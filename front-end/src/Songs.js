import React, {Component} from 'react';
import SongsList from './SongsList';

class Songs extends Component {
  render(){
      return (
        <div className="Songs">
        <h2> Top Songs </h2>
        <p> These are the top songs for the week! </p>
        <SongsList />
        </div>
      );
    }
}
export default Songs;
