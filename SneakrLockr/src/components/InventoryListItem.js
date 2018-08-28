import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '-!react-svg-loader!../assets/images/icons/icon-edit.svg';
import RemoveIcon from '-!react-svg-loader!../assets/images/icons/icon-remove.svg';
import AddIcon from '-!react-svg-loader!../assets/images/icons/icon-add.svg';
import { editInventory } from '../actions/inventory';


// class InventoryListItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		if ( this.props.upcId ) {
// 			return (
// 				<div className="inventory-items__item" id={this.props.id}>
// 					<p className="h5">{this.props.brand}</p>
// 					<div className="inventory-items__meta">
// 						<p>Style: {this.props.style ? this.props.style : '--'}</p>
// 						<p>Size: {this.props.size ? this.props.size : '--'}</p>
// 						<p>UPC: {this.props.upcId}</p>
// 					</div>

// 					<div className="inventory-items__controls">
// 						<Link className="inventory-items__edit" to={`/edit/${this.props.id}`}><EditIcon /></Link>
// 						<Link className="inventory-items__remove" to={`/edit/${this.props.id}`}><RemoveIcon /></Link>
// 					</div>
// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div className="inventory-items__item" id={this.props.id}>
// 					<Link to={`/edit/${this.props.id}`}>+ Add Sneaker</Link>
// 				</div>
// 			);
// 		}
		
// 	}
// }

const InventoryListItem = ({ dispatch, id, brand, style, size, upcId }) => {
	// if item already has upcID, display data, otherwise allow add capabilities
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