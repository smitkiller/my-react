import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Page} from '../components';
import {loadPages} from '../actions';
import {connect} from 'react-redux';

class Pages extends Component{
	static propTypes={

	}
	onReloadPages=()=>{
		this.props.onLoadPages()
	}
	componentDidMount(){
		this.onReloadPages()
	}

	render(){
		return(
				<Page
					pages={this.props.pages}
				/>
			)
	}
}
export default connect(
		(state)=>({pages:state.pages}),
		{onLoadPages:loadPages}
	)(Pages)