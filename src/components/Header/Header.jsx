import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About/About";
import Posts from "../pages/Posts/Posts";
import MyButton from "../UI/Button/MyButton";

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const signup = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className="navbar">
      <MyButton className="signUp" onClick={signup}>
        Sign up
      </MyButton>
      <div className="navbar__links">
        <Link to="posts" element={<Posts />} className="posts">Posts</Link>
        <Link to="about" element={<About />} className="about">About</Link>
      </div>
    </div>
  )
}

export default Header;