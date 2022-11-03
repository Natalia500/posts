import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return <h3 className="title">Posts not found</h3>
    }

    return (
        <div>
            <h2>{title}</h2>
            {
                posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList