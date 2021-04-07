import {Link} from 'react-scroll';
import '../../scss/login-page/_login.scss';
import {useHistory} from 'react-router-dom';


const NavBar = () => {
    const history = useHistory();
    return (
        <ul className='navbar'>
            <li className='navbar__item'>
                <Link onClick={()=>history.push("/")} to='/' smooth={true} duration={800}>
                    Start
                </Link>
            </li>
            <li className='navbar__item'>
                <Link onClick={()=>history.push("/")} to='steps' smooth={true} duration={800}>
                    About project
                </Link>
            </li>
            <li className='navbar__item'>
                <Link onClick={()=>history.push("/")} to='about' smooth={true} duration={800}>
                    About us
                </Link>
            </li>
            <li className='navbar__item'>
                <Link onClick={()=>history.push("/")} to='help' smooth={true} duration={800}>
                    Foundations and organizations
                </Link>
            </li>
            <li className='navbar__item'>
                <Link onClick={()=>history.push("/")} to='contact' smooth={true} duration={800}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;