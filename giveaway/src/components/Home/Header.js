import {Link} from "react-router-dom";
import '../../scss/home-page/_header.scss';
import Deco from "../../assets/decoration.svg";
import Button from './Button';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="login__container">
                    <Link className="menu__link-log" to="/logowanie">Zaloguj</Link>
                    <Link className="menu__link-log" to="/rejestracja">Załóż konto</Link>
                </nav>
                <nav className="menu__container">
                    <Link className="menu__link" to="/">Start</Link>
                    <Link className="menu__link" to="/about">O co chodzi?</Link>
                    <Link className="menu__link" to="/">O nas</Link>
                    <Link className="menu__link" to="/">Fundacja i organizacje</Link>
                    <Link className="menu__link" to="/">Kontakt</Link>
                </nav>
                <section className="hero__container">
                    <div className="hero__text">
                        <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={Deco} alt="dekoracja"/>
                        <div className="buttons">
                            <Button text='Oddaj rzeczy' />
                            <Button text='Zorganizuj zbiórkę' />
                        </div>
                    </div>
                </section>
            </div>
        </header>

    );
};

export default Header;