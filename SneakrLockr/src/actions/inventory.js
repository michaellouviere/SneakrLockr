import uuid from 'uuid';

//Adds Actions to site for
//addInventory - adding entirely new inventory to store (uses UUID to generated unique id for each, used for editing/removing)
//removeInventory - hard removes items fro inventory, requires id from item to edit
//editInventory - edit's existing inventory, requires id from item to edit and updates to obj
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

export const removeInventory = ({ id } = {}) => ({
	type: 'REMOVE_INVENTORY',
	id
});

export const editInventory = (id, updates) => ({
	type: 'EDIT_INVENTORY',
	id,
	updates
});