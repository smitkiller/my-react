import {
	LOAD_PAGES_REQUEST,
	LOAD_PAGES_SUCCESS,
	LOAD_PAGES_FAILURE
	} from '../constants/actionTypes';
import {database} from '../constants/configFirebase';


export function loadPages(){
	return dispatch=>{
		dispatch(loadPagesRequest());
		dispatch(loadData());
	}
}

function loadData(){
	return dispatch=>{
		dispatch(loadPagesRequest());
		database.ref('articles').once('value')
		.then((snapshot)=>{
			//console.log("snapshot===>",snapshot);
			dispatch(loadPagesSuccess(snapshot.val()));
		})
		.catch((error)=>{
			dispatch(loadPagesFailure());
		})

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