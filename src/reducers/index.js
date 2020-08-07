import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import pages from './pages';
import page from './page';

export default combineReducers({
	form:formReducer,
	routing:routerReducer,
	pages,page
})