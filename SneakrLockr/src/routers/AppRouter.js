import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryDashboardPage from '../components/InventoryDashboardPage';
import InventoryEditPage from '../components/InventoryEditPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Setup default app routing
// '/' - Inventory Dashboard Page
// 'edit/:id' - Used for both add and edit of inventory items where id is a unique UUID generated when addInventory action is dispatched
const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" component={InventoryDashboardPage} exact={true} />
					<Route path="/edit/:id" component={InventoryEditPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	</BrowserRouter>
);

export default AppRouter;