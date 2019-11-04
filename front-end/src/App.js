import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

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
        <Nav />
        <Main />
        <Footer />
        </div>
      );
    }
}

export default App;
