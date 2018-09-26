import React,{Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Routes from '../routers';

export default class Root extends Component{
	render(){
		const {history,initialState} = this.props;
		const store = configureStore(history,initialState);
		return(
				<Provider store={store} key='provider'>
				<Routes
					history={history} />
				</Provider>
			)
	}
}