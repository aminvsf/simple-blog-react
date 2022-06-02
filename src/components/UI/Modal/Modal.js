import React, {useEffect, useState} from "react";

import './Modal.css';
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Backdrop from "../Backdrop/Backdrop";
import axios from "../../../axios-posts";


const Modal = (props) => {
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        if ((!post && props.postId) || (post && props.postId !== post.id)) {
            axios.get(`posts/${props.postId}`).then((response) => {
                setPost(response.data);
            });
        }
        if ((!author && post) || (post && post.author !== author.id)) {
            axios.get(`authors/${post.author}`).then((response) => {
                setAuthor(response.data);
            });
        }
    });

    const modalConditionalStyle = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0',
    };

    return <Wrapper>
        <Backdrop show={props.show} closeHandler={props.closeHandler}/>
        <div className={'modal'} style={modalConditionalStyle}>
            <div className={'modal-container'}>
                <div className={'modal-head'}>
                    <h2>{post ? post.title : null}</h2>
                    <button className={'btn-close'} onClick={props.closeHandler}>Close</button>
                </div>
                <div className={'modal-content'}>
                    <p>{post ? post.content : null}</p>
                    <p className={'text-danger'}>{author ? author.name : null}</p>
                </div>
            </div>
        </div>
    </Wrapper>;
};

export default Modal;
