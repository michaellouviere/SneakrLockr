import React from 'react';
import { Link } from 'react-router-dom';
import InventoryList from './InventoryList';

const InventoryDashboardPage = (props) => (
	<div>
		<h1>Sneaker Inventory</h1>
		<InventoryList />
		<Link to="/edit/4">Edit Item</Link>
	</div>
);

export default InventoryDashboardPage;