import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Songs from './Songs';
import Posts from './Posts';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

class App extends Component {
  render(){
      return (
        <div className="App">

        <Header />

        <Router>
          <div>
            <nav>
              <Link to="/">Go to Home Page</Link>{' '}
              <Link to="/main">Back to the Main Page</Link>{' '}
              <Link to="/profile">User Profile</Link>{' '}
              <Link to="/songs">Top Songs</Link>{' '}
              <Link to="/posts">Top Posts</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/songs" component={Songs} />
            <Route path="/posts" component={Posts} />
          </div>
        </Router>

        <Footer />
        </div>
      );
    }
}

export default App;
