import React from 'react';
import { Link } from 'react-router-dom';

const InventoryDashboardPage = (props) => (
	<div>
		<h1>This is the edit inventory page for item with ID:{props.match.params.id}.</h1>
		<Link to="/">Go Home</Link>
	</div>
);

export default InventoryDashboardPage;