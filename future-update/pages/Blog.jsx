import React from 'react';
import {  Link } from 'react-router-dom';

const posts = [
    { id: 1, title: 'First Post  sadasd asds', content: 'Content of the first post', cat: 'test' },
    { id: 2, title: 'Second ', content: 'Content of the second post', cat: 'test' },
    // Add more posts here
];

const titleToLink = postTitle => postTitle.toLowerCase().replaceAll(' ', '-');

const Blog = () => {
    return (
        <>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link to={`/post/${titleToLink(post.title)}`} state={post}>{post.title} </Link>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Blog;