import React from 'react';
import { Link } from 'react-router-dom';
import InventoryList from './InventoryList';

// Inventory Dashboard Page Component
// Displays 5x5 grid of inventory items from InventoryList component
const InventoryDashboardPage = (props) => (
	<div>
		<h1 className="text-primary text-uppercase page-heading">Current Inventory</h1>
		<InventoryList />
	</div>
);

export default InventoryDashboardPage;