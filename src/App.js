import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';



class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello User </h1>
        <NavBar/>
        <Routes/>
      </div>
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
