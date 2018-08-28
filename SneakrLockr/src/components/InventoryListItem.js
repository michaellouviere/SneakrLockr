import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '-!react-svg-loader!../assets/images/icons/icon-edit.svg';
import RemoveIcon from '-!react-svg-loader!../assets/images/icons/icon-remove.svg';
import AddIcon from '-!react-svg-loader!../assets/images/icons/icon-add.svg';
import { editInventory } from '../actions/inventory';

// InventoryListItem Component handles displaying a "slot" for each inventory item grabbed from store
// Assumes if an item has a upcId then it exists, otherwise we setup "add" capabilities 
// (There may have been a better way to conditionally render this JSX?)
const InventoryListItem = ({ dispatch, id, brand, style, size, upcId }) => {
	if ( upcId ) {
		return (
			<div className="inventory-items__item" id={id}>
				<p className="h5">{brand}</p>
				<div className="inventory-items__meta">
					<p>Style: {style ? style : '--'}</p>
					<p>Size: {size ? size : '--'}</p>
					<p>UPC: {upcId}</p>
				</div>

				<div className="inventory-items__controls">
					<Link className="inventory-items__edit" to={`/edit/${id}`}><EditIcon /></Link>
					<a className="inventory-items__remove" onClick={() => {
						dispatch(editInventory(id, { brand: '', style: '', size: '', upcId: '' }));
					}}><RemoveIcon /></a>
				</div>
			</div>
		);
	} else {
		return (
			<div className="inventory-items__item">
				<div className="inventory-items__adder" id={id}>
					<Link className="inventory-items__add" to={`/edit/${id}`}><AddIcon /></Link>
				</div>
			</div>	
		);
	}
}

export default connect()(InventoryListItem);