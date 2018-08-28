import React from 'react';
import { Link } from 'react-router-dom';

class InventoryListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if ( this.props.upcId ) {
			return (
				<div className="inventory-items__item" id={this.props.id}>
					<h3>{this.props.brand}</h3>
					<div className="inventory-items__meta">
						<p>Style: {this.props.style}</p>
						<p>Size: {this.props.size}</p>
						<p>UPC: {this.props.upcId}</p>
						<Link to={`/edit/${this.props.id}`}>Edit</Link>
					</div>
				</div>
			);
		} else {
			return (
				<div className="inventory-items__item" id={this.props.id}>
					<Link to={`/edit/${this.props.id}`}>+ Add Sneaker</Link>
				</div>
			);
		}
		
	}
}

// const InventoryListItem = ({ dispatch, id, brand, style, size, upcId }) => (
// 	<div className="inventory-items__item" id={id}>
// 		<h3>{brand}</h3>
// 		{upcId ? `
// 			<div>
// 				<p>Style: ${style}</p> }
// 				<p>Size: ${size}</p>
// 				<p>UPC: ${upcId}</p>
// 			</div>
// 		`:`
// 		<div>
// 			<p>Style: ${style}</p> }

// 		</div>
// 		`
// 		}
// 	</div>
// );

export default InventoryListItem;