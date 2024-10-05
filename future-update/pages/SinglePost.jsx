import React from 'react';
import { useLocation } from 'react-router-dom';

const SinglePost = () => {

    const location = useLocation();
    const post = location.state;

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default SinglePost;