import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img src={comment.image}/>
            </a>
            <div className="content">
                <a className="author"> {comment.user} </a>
                <div className="metadata">
                    <span className="date"> {comment.time} </span>
                </div>
                <div className="text">
                    {comment.text}
                </div>
            </div>
        </div>
    );
    
}

export default Comment;