import React from 'react';
import '../../scss/login-page/_login.scss';
import LoginForm from "../organisms/LoginForm";
import NavBar from "../molecules/NavBar";
import LoginBar from "../molecules/LoginBar";
import SignUp from "../molecules/SignUp";

const Login = () => {
    return (
        <section className="login__section">
            <>
            <LoginBar />
            <NavBar />
            <LoginForm />
            </>
        </section>
    );
};

export default Login;
