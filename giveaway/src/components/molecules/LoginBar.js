import LoginBarLink from '../atoms/LoginBarLink';
import '../../scss/login-page/_login.scss';
const LoginBar = () => {
    return (
        <ul className='login__bar'>
            <li className='login__bar-item'>
                <LoginBarLink path='/login' text='Login' />
            </li>
            <li className='login__bar-item'>
                <LoginBarLink path='/signup' text='Sign up' />
            </li>
        </ul>
    );
}

export default LoginBar;