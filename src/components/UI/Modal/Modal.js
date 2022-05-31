import React from "react";

import './Modal.css';
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
	const modalConditionalStyle = {
		transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0',
	};

	return <Wrapper>
		<Backdrop show={props.show} closeHandler={props.closeHandler}/>
		<div className={'modal'} style={modalConditionalStyle}>
			<div className={'modal-container'}>
				<div className={'modal-head'}>
					<h2>{props.postTitle}</h2>
					<button className={'btn-close'} onClick={props.closeHandler}>Close</button>
				</div>
				<div className={'modal-content'}>
					<p>{props.postContent}</p>
				</div>
			</div>
		</div>
	</Wrapper>;
};

export default Modal;
