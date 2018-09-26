import {
	LOAD_PAGES_REQUEST,
	LOAD_PAGES_SUCCESS,
	LOAD_PAGES_FAILURE
	} from '../constants/actionTypes';

export function loadPages(){
	return dispatch=>{
		dispatch(loadPagesRequest());
		dispatch(loadData());
	}
}

function loadData(){
	const datas=[
				{
					'id':1,
					 'name':'react',
					 'lastname':'redux'
				},
				{
					'id':2,
					'name':'som',
					'lastname':'cool'
				}
	]
		if(datas !==''){
			return dispatch=>{
				dispatch(loadPagesSuccess(datas));
			}
		}else{
			return dispatch=>{
				dispatch(loadPagesFailure(datas));
			}
		}
	
}
function loadPagesRequest(){
	return{
		type:LOAD_PAGES_REQUEST
	}
}

function loadPagesSuccess(pages){
	return{
		type:LOAD_PAGES_SUCCESS,
		payload:pages
	}
}
function loadPagesFailure(){
	return{
		type:LOAD_PAGES_FAILURE
	}
}