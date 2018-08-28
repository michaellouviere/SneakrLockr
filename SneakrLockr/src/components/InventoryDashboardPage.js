import React from 'react';
import { Link } from 'react-router-dom';
import InventoryList from './InventoryList';

const InventoryDashboardPage = (props) => (
	<div>
		<h1 className="text-primary text-uppercase">Sneaker Inventory</h1>
		<InventoryList />
	</div>
);

export default InventoryDashboardPage;