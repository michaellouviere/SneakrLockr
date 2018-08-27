import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addInventory } from './actions/inventory';
import _ from 'lodash';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const initialItems = 25;
const brands = ['Nike', 'Adidas', 'Reebok', 'Air Jordan', 'Fila', 'New Balance', 'Asics', 'Puma'];    
const styles = ['Running', 'Basketball', 'Casual', 'Slides', 'Boots'];
let i;

// Create initial state
// 1. 5x5 Grid
// 2. First 5 items pre-populated with default randomly generated brand, style, size and UPC

for (i = 0; i < initialItems; i++ ) {
	if ( i <= 5 ) {
		store.dispatch(addInventory({ brand: _.sample(brands), style: _.sample(styles), size: (Math.floor(Math.random() * 15) + 1).toString(), upcId: Math.floor(100000 + Math.random() * 999999999999).toString() }));
	} else {
		store.dispatch(addInventory());
	}
}

const state = store.getState();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));