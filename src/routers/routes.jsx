import React,{Component} from 'react';
import {Router,Route} from 'react-router';
import App from '../App';
import {NotFound} from '../components';
import {Pages,TestTableCon,LoginCon,CheckAuthed} from '../containers';

class Routes extends Component{
	render(){
		const {history}=this.props;
		return (
					<Router history={history}>
						<Route path='/' exact component={App}/>
						<Route path='page' component={CheckAuthed(Pages)}/>
						<Route path='table' component={TestTableCon}/>
						<Route path='login' component={LoginCon}/>
						<Route path='*' component={NotFound}/>
					</Router>
				)
	}
}
export default Routes;