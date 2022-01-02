import React from 'react';
import PostCard from './PostCard';

const PostList = ({posts, onPostSelect}) => {
    const postList = posts.map( post => {
        return <PostCard post = {post} onPostSelect = {onPostSelect}/>
    })
    return <div className = "ui relaxed divided list"> {postList} </div>
}

export default PostList;