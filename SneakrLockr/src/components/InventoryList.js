import React from 'react';
import { connect } from 'react-redux';
import InventoryListItem from './InventoryListItem';

// InventoryList Component fetches items from store and outputs an InventoryListItem Component for each
const InventoryList = (props) => (
	<div className="inventory">
		<div className="inventory-items">
			{ 
				props.inventory.map((item) => (
					<InventoryListItem 
						key={item.id}
						{...item}
					/>
				))
			}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		inventory: state.inventory
	};
};

export default connect(mapStateToProps)(InventoryList);