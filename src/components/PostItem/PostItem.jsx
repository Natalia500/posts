import React from "react";
import MyButton from "../UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <h3>{props.post.id}. {props.post.title}</h3>
          <div className="">
            <p>{props.post.body}</p>
          </div>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => props.remove(props.post)} className="delete">Delete</MyButton>
          <MyButton onClick={() => router(`/posts/${props.post.id}`)} className="readMore">Read more</MyButton>
        </div>
      </div>
    </div>
  )
}
export default PostItem