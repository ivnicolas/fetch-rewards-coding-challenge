import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

import {GlobalProvider} from './context/GlobalState'

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <h1> Hello User </h1>
        <NavBar/>
        <Routes/>
      </GlobalProvider>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div>
//        Welcome User
//     </div>
//   );
// }

// export default App;
