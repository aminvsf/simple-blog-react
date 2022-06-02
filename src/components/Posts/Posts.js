import React, {useEffect} from "react";

import './Posts.css';
import Post from "../Post/Post";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import axios from "../../axios-posts";
import HeadContainer from "../UI/Head/HeadContainer";

const Posts = (props) => {
    useEffect(() => {
        axios.get('posts/').then((response) => {
            props.setPostsState(response.data);
        });
    });

    return <Wrapper>
        <HeadContainer title={'Posts'}/>
        <div className={'posts-container'}>
            {props.posts.map((post) => {
                return <Post
                    key={post.id}
                    post={post}
                    showPost={props.showPost}
                />;
            })}
        </div>
    </Wrapper>;
};

export default Posts;
