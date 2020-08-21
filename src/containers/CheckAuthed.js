import React,{Component} from 'react';
import {firebaseAuth} from '../constants/configFirebase';
import {browserHistory} from 'react-router';

export default function check(Ccomponent){
	class Authed extends Component{
		constructor(props){
			super(props);
			this.state = {
				authed:null
			}
		}
		componentDidMount(){
			firebaseAuth.onAuthStateChanged((user)=>{
				if(user){
					this.setState({authed:true});
				}else{
					this.setState({authed:false});
					alert('Please Login')
					browserHistory.push('/login');
				}
			})
		}
		render(){
			const {authed} = this.state;
			return(
					authed === null || authed === false
					?
					<div><h1>Loading...</h1></div>
					:
					<Ccomponent {...this.props} />
				)
		}
	}
	return Authed;
}