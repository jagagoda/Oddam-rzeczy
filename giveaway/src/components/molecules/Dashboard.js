import Title from "../atoms/Title";
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";
import React from "react";
import '../../scss/login-page/_login.scss';
import '../../scss/home-page/_dashboard.scss';

const Dashboard = () => {
    return (
        <section className="logout">
            <LoginBar />
            <NavBar />
            <Title mainText="Successful logout" />
            <div className="logout__btn">
                <button className="btn logout__button">Home page</button>
            </div>
        </section>
    );
};

export default Dashboard;
