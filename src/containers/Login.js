import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Login} from '../components';
import {LoginWithGoogle,LoginWithFacebook} from '../actions';
import {firebaseAuth} from '../constants/configFirebase';


class LoginCon extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentUser:null
		}
	}

	onLogOut=(e)=>{
		e.preventDefault();
		firebaseAuth.signOut().then(()=>{
			this.setState({currentUser:false})
		})
	}
	componentDidMount(){
		firebaseAuth.onAuthStateChanged((user)=>{
			if(user){
				this.setState({currentUser:user})
			}else{
				this.setState({currentUser:false})
			}
		})
	}
	render(){
		const {currentUser} = this.state;
		//console.log('currentUser==>',currentUser)
		return(
			<div>
			{
				currentUser === null
				?
				<div><h1>Loading...</h1></div>
				:
				<Login 
					currentUser={currentUser}
					onLogOut={this.onLogOut}
					onLoginGoogle={this.props.onLoginGoogle}
					onLoginFacebook={this.props.onLoginFacebook}
				/>
			}
			
			</div>
			);
	}
}

function mapDispatchToProps(){
	return{
		onLoginGoogle:()=>LoginWithGoogle(),
		onLoginFacebook:()=>LoginWithFacebook()
	}
}

LoginCon = connect(
	mapDispatchToProps
	)(LoginCon)
export default LoginCon;