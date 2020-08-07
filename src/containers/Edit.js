import React,{Component} from 'react';
import EditDialog from '../dialog/editDialog';
import {connect} from 'react-redux';
import {loadByID,updateData} from '../actions';
import {reduxForm} from 'redux-form';

class Edit extends Component{
	render(){
		const {id,handleSubmit} = this.props;
		return(
				<div>
					<EditDialog
						onLoadByID={this.props.onLoadByID}
						handleSubmit={handleSubmit}
					/>
				</div>

			)
	}
}

const mapInitialValues = (state) =>{
	return{
		initialValues:{
			id:state.page.id,
			title:state.page.title,
			content:state.page.content
		}
	}
}

const mapDispatchToProps = (dispatch,id) =>{
	return {
		onLoadByID:()=>dispatch(loadByID(id))
	}
}

Edit = reduxForm({
	form:'edit-form',
	enableReinitialize:true,
	onSubmit:(value,dispatch)=>dispatch(updateData(value))
})(Edit)

Edit = connect(
	mapInitialValues,mapDispatchToProps
)(Edit)

export default Edit;