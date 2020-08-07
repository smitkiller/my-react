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

	LOAD_REQUEST,
	LOAD_SUCCESS,
	LOAD_FAILURE,

	UPDATE_REQUEST,
	UPDATE_SUCCESS,
	UPDATE_FAILURE,

	} from '../constants/actionTypes';
import {database,ref} from '../constants/configFirebase';

export function updateData(data){
	return dispatch=>{
		dispatch(updateRequest());
		database.ref('articles').child(data.id).update(data)
		.then(()=>{
			dispatch(updateSuccess());
			dispatch(loadData());
		})
		.catch(()=>{
			dispatch(updateFailure());
		})
	}
}

function updateRequest(){
	return{
		type:UPDATE_REQUEST
	}
}

function updateSuccess(){
	return{
		type:UPDATE_SUCCESS
	}
}
function updateFailure(){
	return{
		type:UPDATE_FAILURE
	}
}

export function loadByID(data){
	return dispatch=>{
		dispatch(loadRequest());
		database.ref('articles').child(data.id).once('value')
		.then((snapshot)=>{
			dispatch(loadSuccess(snapshot.val(),data.id));
		})
		.catch(()=>{
			dispatch(loadFailure());
		})
	}

}

function loadRequest(){
	return{
		type:LOAD_REQUEST
	}
}

function loadSuccess(data,id){
	return{
		type:LOAD_SUCCESS,
		payload:{
			id:id,
			title:data.title,
			content:data.content
		}
	}
}
function loadFailure(){
	return{
		type:LOAD_FAILURE
	}
}


export function loadData(){
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