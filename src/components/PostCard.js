import React from 'react';

const PostCard = ({post, onPostSelect}) => {
    
    return(
        <div>
            <div onClick = {() => onPostSelect(post)}>
                <img className = "ui image" src = {post.image}/>
                <div className = "content">
                    <div className = "header">
                        {post.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;