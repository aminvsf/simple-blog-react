import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './PostCreate.css';
import HeadContainer from "../UI/Head/HeadContainer";
import axios from "../../axios-posts";

const PostCreate = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState('not-selected');
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        if (!authors.length) {
            axios.get('authors/').then((response) => {
                setAuthors(response.data);
            });
        }
    });

    const validator = () => {
        return !(!title || !content || !authorId);
    };

    const submitHandler = () => {
        if (validator()) {
            const data = {
                'title': title,
                'content': content,
                'author': Number(authorId)
            };
            axios.post('posts/', data)
                .then((_) => {
                    toast.success('Post created successfully!');
                    setTitle('');
                    setContent('');
                    setAuthorId('not-selected');
                })
                .catch((_) => {
                    toast.error(`An error occurred!`);
                });
        } else {
            toast.error('All fields are required!');
        }
    };

    return <div className={'new-post-section'}>
        <HeadContainer title={'New Post'}/>
        <ToastContainer/>
        <div className={'inputs'}>
            <div className={'input'}>
                <div>
                    <label>Title</label>
                </div>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className={'input'}>
                <div>
                    <label>Author</label>
                </div>
                <select name="author"
                        id="author"
                        defaultValue={authorId}
                        onChange={(event) => setAuthorId(event.target.value)}>
                    <option disabled value={'not-selected'}>-- select an author --</option>
                    {authors.map((author) => {
                        return <option key={author.id} value={author.id}>{author.name}</option>;
                    })}
                </select>
            </div>
            <div className={'input input-block'}>
                <div>
                    <label>Content</label>
                </div>
                <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="5"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <div className={'input'}>
                <button className={'submit-button'} onClick={submitHandler}>Submit</button>
            </div>
        </div>
    </div>;
};

export default PostCreate;

