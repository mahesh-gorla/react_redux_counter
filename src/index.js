/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const intialState = {
	counter: 0
};
function reducer(state = intialState, action) {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'DEC':
			return {
				...state,
				counter: state.counter - 1
			};
		default:
			return state;
	}
}
const store = createStore(reducer);
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
