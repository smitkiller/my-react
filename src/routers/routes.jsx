import React,{Component} from 'react';
import {Router,Route} from 'react-router';
import App from '../App';
import {Pages,TestTableCon} from '../containers';

class Routes extends Component{
	render(){
		const {history}=this.props;
		return (
					<Router history={history}>
						<Route path='/' exact component={App}/>
						<Route path='page' component={Pages}/>
						<Route path='table' component={TestTableCon}/>
					</Router>
				)
	}
}
export default Routes;