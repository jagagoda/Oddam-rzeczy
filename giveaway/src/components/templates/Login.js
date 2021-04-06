import React from 'react';
import '../../scss/login-page/_login.scss';
import NavBar from "../molecules/NavBar";
import LoginBar from "../molecules/LoginBar";
import SignUp from "../molecules/SignUp";
import LoginForm from "../organisms/LoginForm";
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../molecules/Dashboard";
import Home from "../pages/Home";

const Login = () => {
    return (
        <Router>
        <section className="login__section">
            <LoginBar />
            <NavBar />
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </section>
        </Router>
    );
};

export default Login;
