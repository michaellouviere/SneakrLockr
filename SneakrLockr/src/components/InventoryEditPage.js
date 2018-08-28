import React from 'react';
import { connect } from 'react-redux';
import InventoryForm from './InventoryForm';
import { editInventory } from '../actions/inventory';

const InventoryEditPage = (props) => (
	<div>
		<h1 className="text-primary text-uppercase page-heading">{props.item.upcId ? 'Edit' : 'Add'} Inventory Item</h1>
		<InventoryForm 
			item={props.item} 
			onSubmit={(item) => {
				props.dispatch(editInventory(props.item.id, item));
				props.history.push('/');
			}}
		/>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		item: state.inventory.find((item) => item.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(InventoryEditPage);