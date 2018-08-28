import React from 'react';
import { connect } from 'react-redux';
import InventoryListItem from './InventoryListItem';

const InventoryList = (props) => (
	<div>
		{ 
			props.inventory.map((item) => (
				<InventoryListItem 
					key={item.id}
					{...item}
				/>
			))
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		inventory: state.inventory
	};
};

export default connect(mapStateToProps)(InventoryList);