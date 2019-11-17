import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Page,NavTabs} from '../components';
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
			<div>
			<NavTabs/>
				<Page
					pages={this.props.pages}
				/>
			</div>
			)
	}
}
export default connect(
		(state)=>({pages:state.pages}),
		{onLoadPages:loadPages}
	)(Pages)