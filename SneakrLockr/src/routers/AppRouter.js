import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryDashboardPage from '../components/InventoryDashboardPage';
import InventoryEditPage from '../components/InventoryEditPage';

//Create 6 new files for components
//Same naming conventions, setup imports, component, default export
//Import into AppRouter so they can be used

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={InventoryDashboardPage} exact={true} />
				<Route path="/edit/:id" component={InventoryEditPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;