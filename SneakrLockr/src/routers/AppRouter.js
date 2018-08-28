import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InventoryDashboardPage from '../components/InventoryDashboardPage';
import InventoryEditPage from '../components/InventoryEditPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

//Create 6 new files for components
//Same naming conventions, setup imports, component, default export
//Import into AppRouter so they can be used

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