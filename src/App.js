import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <NavBar/>
        <Routes/>
        </>
    );
  }
}

export default App;
