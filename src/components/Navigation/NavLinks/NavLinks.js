import React from 'react';

import './NavLinks.css';
import NavLink from "../NavLink/NavLink";

const NavLinks = (props) => {
	return <ul className={'nav-links'}>
		<NavLink link={'/'}>Home</NavLink>
		<NavLink link={'/'}>Shop</NavLink>
		<NavLink link={'/'}>Account</NavLink>
	</ul>;
};

export default NavLinks;
