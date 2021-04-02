import {Link} from "react-router-dom";
import '../../scss/home-page/_header.scss';
import Button from '../molecules/Button';
import Title from "../molecules/Title";

const Header = ({to}) => {
    return (
        <header className="header">
            <ul className='navbar__container'>
                <li className='navbar'>
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
                        <Title mainText='Start to help!' text='Give away unwanted stuff' />
                            <Button to={to} text='Give away things' />
                            <Button to={to} text='Organize a collection' />
                    </div>
                </section>
            </div>
            </ul>
        </header>

    );
};

export default Header;