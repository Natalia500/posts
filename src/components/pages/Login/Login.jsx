import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context";
import MyButton from "../../UI/Button/MyButton";
import MyInput from "../../UI/Input/MyInput";

const Login = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h2>Page for login</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login" />
                <MyInput type="password" placeholder="Enter password" />
                <MyButton className="logIn">Log in</MyButton>
            </form>
        </div>
    )
}

export default Login;