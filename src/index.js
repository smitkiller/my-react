import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {browserHistory} from 'react-router';
import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';

const initialState = window.__INITIAL_STATE__;
const rootEl = document.getElementById('root');

render(
		<AppContainer>
			<Root
				history={browserHistory}
				initialState={initialState} />
		</AppContainer>,rootEl
	)
	if(module.hot){
		module.hot.accept('./containers/Root',()=>{
			const NextRootApp = require('./containers/Root').default
			render(
					<AppContainer>
						<NextRootApp
							history={browserHistory}
							initialState={initialState} />
					</AppContainer>,rootEl
				)
		})
	}
registerServiceWorker();
