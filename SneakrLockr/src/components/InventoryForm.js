import React from 'react';
import { Link } from 'react-router-dom';

// InventoryForm Component used to add state to existing inventory slot or edit state if exists
// General assumption is if an item has a upcId it exists, otherwise we're adding a new item to a slot
export default class InventoryForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			brand: props.item ? props.item.brand : '',
			style: props.item ? props.item.style : '',
			size: props.item ? props.item.size : '',
			upcId: props.item ? props.item.upcId : '',
			buttonText: props.item.upcId ? 'Update Item' : 'Add Item',
			formSubmitError: ''
		};
	};
	
	onSubmit = (e) => {
		e.preventDefault(); 

		if ( !this.state.brand || !this.state.style || !this.state.size || !this.state.upcId ) {
			this.setState(() => ({ formSubmitError: 'Brand, Style, Size and UPC Code fields are required.' }));
		} else if (this.state.upcId.length !== 12) {
			this.setState(() => ({ formSubmitError: 'UPC Code must be 12 digits.' }));
		} else {
			this.setState(() => ({ formSubmitError: '' }));

			this.props.onSubmit({
				brand: this.state.brand,
				style: this.state.style,
				size: this.state.size,
				upcId: this.state.upcId
			})
		}
	};
	
	//These probably could have been a single method with some "jiggling of the handle, left as is for future extensibility
	onBrandChange = (e) => {
		const brand = e.target.value;
		this.setState(() => ({ brand }));
	};

	onStyleChange = (e) => {
		const style = e.target.value;
		this.setState(() => ({ style }));
	};

	onSizeChange = (e) => {
		const size = e.target.value;
		this.setState(() => ({ size }));
	};

	onUpcIdChange = (e) => {
		const upcId = e.target.value;
		this.setState(() => ({ upcId }));
	};

	render() {
		return (
			<div >
				{ this.state.formSubmitError && <p className="alert alert-danger">{this.state.formSubmitError}</p> }
				<form onSubmit={this.onSubmit}>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
								<label htmlFor="brand">Brand <span className="text-danger">*</span></label>
								<input 
									className="form-control"
									id="brand"
									type="text" 
									placeholder="Brand"
									value={this.state.brand}
									onChange={this.onBrandChange}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label htmlFor="style">Style <span className="text-danger">*</span></label>
								<input 
									className="form-control"
									id="style"
									type="text"
									placeholder="Style"
									value={this.state.style}
									onChange={this.onStyleChange}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="form-group">
								<label htmlFor="size">Size <span className="text-danger">*</span></label>
								<input 
									className="form-control"
									id="size"
									type="text"
									placeholder="Size"
									value={this.state.size}
									onChange={this.onSizeChange}
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label htmlFor="upcId">UPC Code <span className="text-danger">*</span></label>
								<input 
									className="form-control"
									id="upcId"
									type="text"
									placeholder="UPC Code"
									value={this.state.upcId}
									maxlength="12"
									onChange={this.onUpcIdChange}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="form-group">
								<button className="btn btn-success">{this.state.buttonText}</button>
								<Link to="/" className="btn btn-link">Cancel</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}