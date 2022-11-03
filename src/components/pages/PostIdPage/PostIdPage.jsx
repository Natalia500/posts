import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import PostServise from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostId, isLoading, error] = useFetching(async (id) => {
        const response = await PostServise.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostServise.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostId(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div className="MainPageId"><h2>Post page with ID = {params.id}</h2>
            {isLoading
                ? <Loader />
                : <h2>{post.id}, {post.title}</h2>

            }

            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div>
                            <p>{comm.email}</p>
                            <p>{comm.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage;