import React, { useState } from "react";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const AddNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description of post..."
      />

      <MyButton className="addPost" onClick={AddNewPost}>
        <p>Add post</p>
      </MyButton>
    </form>
  );
};

export default PostForm;
