import React from 'react';

// stateless component
const PostCard = (props) => {
    return (
        <div className="post-card">
            <p>{props.title}</p>
        </div>
    )
}

export default PostCard;