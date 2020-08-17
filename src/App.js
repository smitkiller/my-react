import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import {Button} from '@material-ui/core';
import {LoginWithGoogle,LoginWithFacebook} from './actions';
import {firebaseAuth} from './constants/configFirebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }

  logOut=(e)=>{
    e.preventDefault();
    firebaseAuth.signOut().then(()=>{
      this.setState({currentUser:null})
    })
  }
  componentDidMount(){
    firebaseAuth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({currentUser:user})
      }
    })

  }
  render() {
    const {currentUser} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link className="no_underline" to={{pathname:'/page'}}>
            go to page 
          </Link> 
        </p>      
        <div>
        {
          !currentUser
          ? 
          <div>
          <div>
          <Button onClick={LoginWithGoogle}>Login With Google</Button>
          </div>
          <div>
          <Button onClick={LoginWithFacebook}>Login With Facebook</Button>
          </div>
          </div>
          :
          <div> Hello {currentUser.displayName}
          <div>
          <Button onClick={this.logOut}>Logout</Button>
          </div>
          </div>
        }
       
        </div>
      </div>
    );
  }
}



export default App;