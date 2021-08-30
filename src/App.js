import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <>
        <h1> Hello User </h1>
        <NavBar/>
        <Routes/>
        </>
    );
  }
}

export default App;
