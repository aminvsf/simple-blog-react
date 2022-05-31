import React from 'react';

import './Navlink.css';

const NavLink = (props) => {
	return <li className={'nav-link'}>
		<a href={props.link}>{props.children}</a>
	</li>;
};

export default NavLink;
