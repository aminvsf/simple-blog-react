import React from 'react';

import './Blog.css';
import Wrapper from "../../hoc/Wrapper/Wrapper";
import Modal from "../../components/UI/Modal/Modal";
import Posts from "../../components/Posts/Posts";
import PostCreate from "../../components/PostCreate/PostCreate";
import AuthorCreate from "../../components/AuthorCreate/AuthorCreate";
import {ToastContainer} from "react-toastify";


class Blog extends React.Component {
    state = {
        posts: [],
        currentPostId: null,
        showPostDetail: false,
    };

    showPost = (id) => {
        this.setState({currentPostId: id});
        this.setState({showPostDetail: true});
    };

    modalCloseHandler = () => {
        this.setState({showPostDetail: false});
    };

    postsSetStateHandler = (data) => {
        this.setState({posts: data});
    };

    render() {
        return <Wrapper>
            <ToastContainer/>
            <Modal
                show={this.state.showPostDetail}
                postId={this.state.currentPostId}
                closeHandler={this.modalCloseHandler}
            />
            <Posts
                setPostsState={this.postsSetStateHandler}
                showPost={this.showPost}
                posts={this.state.posts}
            />
            <PostCreate/>
            <AuthorCreate/>
        </Wrapper>;
    }
}

export default Blog;
