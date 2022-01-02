import React from 'react';
import Comment from './Comment'

const SelectedPost = ({selectedPost, comments}) => {

    const commentList = comments.map( comment => {
        return <Comment comment = {comment}/>
    })

    return (
        <div>
            <div className = "ui segment">
                <h1 className = "ui header"> 
                    {selectedPost.title}
                </h1>
                <h4 className = "ui header"> 
                    Author: {selectedPost.author}
                </h4>
                <h4 className = "ui header"> 
                    {selectedPost.time}
                </h4>
                <br/>
                <img className="ui fluid image" src={selectedPost.image}></img>
                <br/>
                <p>
                    {selectedPost.text}
                </p>
            </div>

            <div className = "ui relaxed divided list"> 
                    {commentList} 
            </div>
        </div>
    )
}

export default SelectedPost;