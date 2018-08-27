import { createStore, combineReducers } from 'redux';
import inventoryReducer from '../reducers/inventory';

// Store Creation
export default () => {
	const store = createStore(
		//Using combineReducers for extensibility
		combineReducers({
			expenses: inventoryReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};

