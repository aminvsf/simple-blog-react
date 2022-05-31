import React from "react";

import './Post.css';
import Wrapper from "../../hoc/Wrapper/Wrapper";

const Post = ({post, showPost}) => {
	return <Wrapper>
		<div className={'post'}>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			<button className={'btn-read'} onClick={() => showPost(post.type)}>Read</button>
		</div>
	</Wrapper>;
};

export default Post;
