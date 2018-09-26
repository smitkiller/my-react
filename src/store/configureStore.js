import {createStore,applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {default as thunk} from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducers';

export default (history,initialState) => {
	const middlewares = [thunk,routerMiddleware(history)];
	if(process.env.NODE_ENV !== 'production'){
		middlewares.push(createLogger())
	}

	const store = createStore(
			rootReducer,
			initialState,
			applyMiddleware(...middlewares)
		)
	persistStore(store)

	if(module.hot){
		module.hot.accept('../reducers',()=>{
			import('../reducers').then(nextRootReducer=>
					store.replaceReducer(nextRootReducer.default)
				)
		})
	}

	return store
}