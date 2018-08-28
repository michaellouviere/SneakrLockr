import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '-!react-svg-loader!../assets/images/branding/stockx-logo.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">
				<Link className="header__logo" to="/">
					<Logo />
				</Link>
			</div>
		</header>
	)
};

export default Header;