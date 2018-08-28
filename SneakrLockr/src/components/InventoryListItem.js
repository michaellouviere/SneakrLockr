import React from 'react';
import { Link } from 'react-router-dom';

const InventoryListItem = ({ dispatch, id, brand, style, size, upcId }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{brand}</h3>
		</Link>
		<p>{style} - {size}</p>
		{ upcId && <p>{upcId}</p> }
	</div>
);

export default InventoryListItem;