import React from 'react';
import { Link } from 'react-router-dom';

const InventoryDashboardPage = (props) => (
	<div>
		<h1 className="text-primary text-uppercase page-heading">Add/Edit Item</h1>
		<Link to="/">Go Home</Link>
	</div>
);

export default InventoryDashboardPage;