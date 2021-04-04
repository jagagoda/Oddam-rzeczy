import React from 'react';
import '../../scss/login-page/_login.scss';
import LoginForm from "../organisms/LoginForm";
import Header from "../organisms/Header";

const Login = () => {
    return (
        <>
        <section className="login__section">
            <Header />
            <LoginForm />
        </section>
        </>
    );
};

export default Login;
