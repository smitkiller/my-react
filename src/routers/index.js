import React,{Component} from 'react';
import Routes from './routes';

export default class RoutesIndex extends Component{
	render(){
		const {history} = this.props;
		return(
				<Routes 
					history={history} />
			)
	}
}