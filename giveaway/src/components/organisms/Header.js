import '../../scss/home-page/_header.scss';
import LoginBar from "../molecules/LoginBar";
import NavBar from "../molecules/NavBar";
import Hero from "../molecules/Hero";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <nav className='nav'>
                    <LoginBar />
                    <NavBar />
                </nav>
                <Hero/>
            </div>
        </header>
    )
}

export default Header;