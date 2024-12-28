import React from "react";
import Comment from "./Comment.jsx";

const Post = () => {
    return(
        <div>
            <h2>Example Post Title</h2>
            <p>This is an example post content.</p>
            <Comment />
        </div>
    )
}

export default Post;