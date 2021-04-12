import LoginBarLink from '../atoms/LoginBarLink';
import '../../scss/login-page/_login.scss';
import * as ROUTES from '../../constants/routes';
import SignOutButton from "../atoms/SignOutButton";
const LoginBar = ({ authUser }) => (
    <div>{authUser ? <LoginBarAuth /> : <LoginBarNonAuth />}</div>
);
const LoginBarAuth = () => (
        <ul className='login__bar'>
            <li className='login__bar-item'>
                <LoginBarLink path={ROUTES.LOGIN} text='Login' />
            </li>
            <li className='login__bar-item'>
                <LoginBarLink path={ROUTES.SIGN_UP} text='Sign up' />
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    );

const LoginBarNonAuth = () => (
    <ul>
        <li>
            <LoginBarLink to={ROUTES.HOME}>Home</LoginBarLink>
        </li>
        <li>
            <LoginBarLink to={ROUTES.LOGIN}>Login</LoginBarLink>
        </li>
    </ul>
);

export default LoginBar;