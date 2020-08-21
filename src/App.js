import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import {Button} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link className="no_underline" to={{pathname:'/page'}}>
            go to Page 
          </Link> 
        </p>     
        <p className="App-intro">
          <Link className="no_underline" to={{pathname:'/login'}}>
            go to Login 
          </Link> 
        </p>   
        <div>
       
        </div>
      </div>
    );
  }
}



export default App;