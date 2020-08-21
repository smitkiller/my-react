import React from 'react';
import logo from '../logo.svg';
import {Button} from '@material-ui/core';

export default function Login({currentUser,onLogOut,onLoginGoogle,onLoginFacebook}){
	return(
			<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Login Page</h1>
	        </header>
	        {
	        	!currentUser
	        	?
	        	<div>
		        	<div>
			        	<Button onClick={onLoginGoogle}>
			        		Login With Google
			        	</Button>
		        	</div>
		        	<div>
			        	<Button onClick={onLoginFacebook}>
			        		Login With Facebook
			        	</Button>
		        	</div>
	        	</div>
	        	:
	        	<Button onClick={onLogOut}>
	        		Logout
	        	</Button>
	        }
	        	

	        </div>
		);

}

