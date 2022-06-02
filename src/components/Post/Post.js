import React, {useEffect, useState} from "react";

import './Post.css';
import Wrapper from "../../hoc/Wrapper/Wrapper";
import axios from "../../axios-posts";

const Post = ({post, showPost}) => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        if (!author || post.author !== author.id) {
            axios.get(`authors/${post.author}`).then((response) => {
                setAuthor(response.data);
            });
        }
    });

    return <Wrapper>
        <div className={'post'}>
            <h2>{post.title}</h2>
            <p>{author ? author.name : null}</p>
            <button className={'btn-read'} onClick={() => showPost(post.id)}>Read</button>
        </div>
    </Wrapper>;
};

export default Post;
