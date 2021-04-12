import Title from "../atoms/Title";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";
import React from "react";
import '../../scss/login-page/_login.scss';
import '../../scss/home-page/_dashboard.scss';
import {NavLink} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <LoginBar/>
            <NavBar/>
            <section className="logout">
                <Title mainText="Successful logout"/>
                <div className="logout__btn">
                    <NavLink to="/" className="btn logout__button">
                        Home page
                    </NavLink>
                </div>
            </section>
        </>

    );
};

export default Dashboard;
