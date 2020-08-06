import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Page} from '../components';
import {loadPages,insertData,deleteData} from '../actions';
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
					onDelete={this.props.onDelete}
					/>
			</div>
			)
		}
	
}

Pages = connect(
		(state)=>({pages:state.pages}),
		{onLoadPages:loadPages,onDelete:deleteData}
)(Pages)

Pages = reduxForm({
	form:'information',
	onSubmit:(values,dispatch)=>dispatch(insertData(values))

})(Pages)

export default Pages;
