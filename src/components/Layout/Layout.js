import React from 'react';

import './Layout.css';
import Wrapper from "../../hoc/Wrapper/Wrapper";
import Navbar from "../Navigation/Navbar/Navbar";

const Layout = (props) => {
	return <Wrapper>
		<Navbar/>
		<main className={'main'}>{props.children}</main>
	</Wrapper>;
};

export default Layout;
