import React from 'react';
import { Link } from 'react-router-dom';

const InventoryDashboardPage = () => (
	<div>
		<h1>This is the dashboard</h1>
		<Link to="/edit/4">Edit Item</Link>
	</div>
);

export default InventoryDashboardPage;