import React, {useEffect, useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AuthorCreate.css';
import HeadContainer from "../UI/Head/HeadContainer";
import axios from "../../axios-posts";

const AuthorCreate = (props) => {
    const [name, setName] = useState('');
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        if (!authors.length) {
            axios.get('authors/').then((response) => {
                setAuthors(response.data);
            });
        }
    });

    const submitHandler = () => {
        if (name) {
            const data = {
                'name': name,
            };
            axios.post('authors/', data)
                .then((_) => {
                    toast.success('Author created successfully!');
                    setName('');
                })
                .catch((_) => {
                    toast.error(`An error occurred!`);
                });
        } else {
            toast.error('Name field is required!');
        }
    };

    return <div className={'new-author-section'}>
        <HeadContainer title={'New Author'}/>
        <div className={'inputs'}>
            <div className={'input'}>
                <div>
                    <label>Name</label>
                </div>
                <input
                    type="text"
                    value={name}
                    placeholder={'enter a name'}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className={'input block'}>
                <button className={'submit-button'} onClick={submitHandler}>Submit</button>
            </div>
        </div>
    </div>;
};

export default AuthorCreate;
