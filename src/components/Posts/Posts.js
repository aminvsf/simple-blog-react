import React from "react";

import './Posts.css';
import Post from "../Post/Post";
import Wrapper from "../../hoc/Wrapper/Wrapper";

const Posts = (props) => {
	return <Wrapper>
		<div className={'head-container'}>
			<h1>Posts</h1>
		</div>
		<div className={'posts-container'}>
			{props.posts.map((post) => {
				return <Post
					key={post.title}
					post={post}
					showPost={props.showPost}
				/>;
			})}
		</div>
	</Wrapper>;
};

export default Posts;
