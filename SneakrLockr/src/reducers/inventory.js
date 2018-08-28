// Sets up Inventory reducer
// 'ADD_INVENTORY' - Handles adding new inventory items to store
// 'REMOVE_INVENTORY' - Handles removing existing inventory items from store, this is a hard removal vs "emptying"
// 'EDIT_INVENTORY' - Handles editing exisitng inventory items, also used to clear props preventing the removal of a "slot"
const inventoryReducerDefaultState = [];
const inventoryReducer = (state = inventoryReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_INVENTORY':
			return [
				...state,
				action.inventory
			]
		case 'REMOVE_INVENTORY':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_INVENTORY':
			return state.map((inventory) => {
				if (inventory.id === action.id) {
					return {
						...inventory,
						...action.updates
					}
				} else {
					return inventory;
				}
			});
		default: 
			return state;
	}
};

export default inventoryReducer;