import '../../scss/home-page/_header.scss';
import Button from '../atoms/Button';
import Title from "../atoms/Title";
import LoginBar from "../molecules/LoginBar";
import NavBar from "../molecules/NavBar";

const Header = ({to}) => {
    return (
        <header className="header">
            <div className="header__container">
                <nav className='nav'>
                    <LoginBar/>
                    <NavBar/>
                </nav>
                <section className="hero__container">
                    <div className="hero__text">
                        <Title mainText='Start to help!' text='Give away unwanted stuff'/>
                        <Button to={to} text='Give away things'/>
                        <Button to={to} text='Organize a collection'/>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header;