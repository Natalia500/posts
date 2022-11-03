import React, { useEffect, useRef, useState } from "react";
import PostForm from "../../PostForm/PostForm";
import PostList from "../../PostList/PostList";
import PostFilter from "../../PostFilter/PostFilter";
import { usePosts } from "../../hooks/usePosts";
import PostServise from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount } from "../../utl/pages";
import { Pagination } from "../../UI/Pagination/Pagination";
import { useObserver } from "../../hooks/useObserver";


function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostServise.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })


  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])


  const createPost = (newPost) => {                       //add post
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {                          //delete post
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page);
  }

  return (
    <div className="Posts">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError &&
        <h1>error ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="POSTS" />

      <div ref={lastElement} style={{ height: 5, background: 'white' }} />

      {isPostsLoading &&
        <div className="loading"><Loader /></div>
      }

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;