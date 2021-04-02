import {Link} from "react-router-dom";
import '../../scss/home-page/_header.scss';
import Deco from "../../assets/decoration.svg";
import Button from './Button';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="login__container">
                    <Link className="menu__link-log" to="/logging">Sign in</Link>
                    <Link className="menu__link-log" to="/registration">Sign up</Link>
                </nav>
                <nav className="menu__container">
                    <Link className="menu__link" to="/">Start</Link>
                    <Link className="menu__link" to="/about">What is it about?</Link>
                    <Link className="menu__link" to="/">About us</Link>
                    <Link className="menu__link" to="/">Foundations and organizations</Link>
                    <Link className="menu__link" to="/">Contact</Link>
                </nav>
                <section className="hero__container">
                    <div className="hero__text">
                        <h1>Start to help!<br/>Giveaway unwanted stuff</h1>
                        <img src={Deco} alt="decoration"/>
                        <div className="buttons">
                            <Button text='Give away things' />
                            <Button text='Organize a collection' />
                        </div>
                    </div>
                </section>
            </div>
        </header>

    );
};

export default Header;