import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Page} from '../components';
import {loadPages,insertData} from '../actions';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';


class Pages extends Component{

	onReloadPages=()=>{
		this.props.onLoadPages()
	}
	componentDidMount(){
		this.onReloadPages()
	}

	/*componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.pages !== prevProps.pages) {
	    	this.onReloadPages()
	  }
	}*/
	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
				<Page
					pages={this.props.pages} 
					handleSubmit={handleSubmit}
					/>
			</div>
			)
		}
	
}

Pages = connect(
		(state)=>({pages:state.pages}),
		{onLoadPages:loadPages}
)(Pages)

Pages = reduxForm({
	form:'article-form',
	onSubmit:(values,dispatch)=>dispatch(insertData(values))
})(Pages)


export default Pages;
