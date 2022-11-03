import React from "react";
import About from "../pages/About/About";
import Posts from "../pages/Posts/Posts";
import PostIdPage from "../pages/PostIdPage/PostIdPage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Login from "../pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }
  return (
    isAuth
      ? <Routes>
        <Route path="/">
          <Route path="*" element={<Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<PostIdPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>

      : <Routes>
        <Route path="/">
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
  )
}

export default AppRouter;