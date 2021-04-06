import {Link} from 'react-scroll';
import '../../scss/login-page/_login.scss';
const NavBar = () => {

    return (
        <ul className='navbar'>
            <li className='navbar__item'>
                <Link to='/' smooth={true} duration={500}>
                    Start
                </Link>
            </li>
            <li className='navbar__item'>
                <Link to='steps' smooth={true} duration={500}>
                    About project
                </Link>
            </li>
            <li className='navbar__item'>
                <Link to='about' smooth={true} duration={500}>
                    About us
                </Link>
            </li>
            <li className='navbar__item'>
                <Link to='help' smooth={true} duration={500}>
                    Foundations and organizations
                </Link>
            </li>
            <li className='navbar__item'>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;