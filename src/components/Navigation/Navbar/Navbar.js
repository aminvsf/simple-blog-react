import React from 'react';

import './Navbar.css';
import NavLinks from "../NavLinks/NavLinks";

const Navbar = (props) => {
	return <header className={'header'}>
		<nav>
			<NavLinks/>
		</nav>
	</header>;
};

export default Navbar;
