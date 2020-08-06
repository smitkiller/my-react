import {
	LOAD_PAGES_REQUEST,
	LOAD_PAGES_SUCCESS,
	LOAD_PAGES_FAILURE,

	INSERT_PAGES_REQUEST,
	INSERT_PAGES_SUCCESS,
	INSERT_PAGES_FAILURE,

	DEL_PAGES_REQUEST,
	DEL_PAGES_SUCCESS,
	DEL_PAGES_FAILURE,

	} from '../constants/actionTypes';
import {database,ref} from '../constants/configFirebase';


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

export function insertData(data){
	return dispatch=>{
		dispatch(insertRequest());
		ref.child(`articles`).push()
    	.set(data,function(error){
    		if(error){
    			dispatch(insertFailure());
    		}else{
    			dispatch(insertSuccess());
    			dispatch(loadData());

    		}
    	})
	}
}

export function deleteData(id){
	return dispatch=>{
		dispatch(deleteRequest());
		database.ref('articles').child(id).remove()
		.then(()=>{
			dispatch(deleteSuccess());
			dispatch(loadData());
		})
		.catch(()=>{
			dispatch(deleteFailure());
		})
	}
}

function deleteRequest(){
	return{
		type:DEL_PAGES_REQUEST
	}
}

function deleteSuccess(){
	return{
		type:DEL_PAGES_SUCCESS
	}
}
function deleteFailure(){
	return{
		type:DEL_PAGES_FAILURE
	}
}

function insertRequest(){
	return{
		type:INSERT_PAGES_REQUEST
	}
}

function insertSuccess(){
	return{
		type:INSERT_PAGES_SUCCESS
	}
}
function insertFailure(){
	return{
		type:INSERT_PAGES_FAILURE
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