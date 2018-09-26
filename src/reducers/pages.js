import {LOAD_PAGES_SUCCESS} from '../constants/actionTypes';

const initialState=[];

export default (state=initialState,action)=>{
	switch(action.type){
		case LOAD_PAGES_SUCCESS:
			return action.payload
		default:
			return state
	}
}