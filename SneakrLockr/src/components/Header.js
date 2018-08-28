import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '-!react-svg-loader!../assets/images/branding/stockx-logo.svg';

// Core Header Component
// Displays application logo and branding info
const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">
				<Link className="header__logo" to="/">
					<Logo />
					<p className="header__logo-tagling">SneakrLockr&reg; - Inventory management for the sneaker head</p>
				</Link>
			</div>
		</header>
	)
};

export default Header;