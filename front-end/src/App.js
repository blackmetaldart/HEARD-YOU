import React, {Component} from 'react';
import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Songs from './components/pages/Songs';
import Posts from './components/pages/Posts';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      token : '',
      user : [],
      jwt: null
    }
  }

  render(){
      return (
        <div className="App">

        <Header />

        <Router>
          <div className="routerNav">
            <nav>
              <Link to="/">Home</Link>{'  '}
              <Link to="/main">Main</Link>{'  '}
              <Link to="/songs">Top Songs</Link>{'  '}
              <Link to="/posts">Posts</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/songs" component={Songs} />
            <Route path="/posts" component={Posts} />
          </div>
        </Router>

        <Footer  />
        </div>
      );
    }
}

export default App;
