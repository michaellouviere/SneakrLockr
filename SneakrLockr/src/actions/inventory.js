import uuid from 'uuid';

// ADD_INVENTORY
export const addInventory = (
	{ 
		brand = '', 
		style = '', 
		size = null, 
		upcId = null 
	} = {}
) => ({
	type: 'ADD_INVENTORY',
	inventory: {
		id: uuid(),
		brand,
		style,
		size,
		upcId
	}
});

// REMOVE_INVENTORY
export const removeInventory = ({ id } = {}) => ({
	type: 'REMOVE_INVENTORY',
	id
});

// EDIT_INVENTORY
export const editInventory = (id, updates) => ({
	type: 'EDIT_INVENTORY',
	id,
	updates
});