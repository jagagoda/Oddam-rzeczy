import LoginBarLink from '../atoms/LoginBarLink';

const LoginBar = () => {
    return (
        <ul className='login__bar'>
            <li className='login__bar-item'>
                <LoginBarLink path='/login' text='Sign in' />
            </li>
            <li className='login__bar-item'>
                <LoginBarLink path='/register' text='Sign up' />
            </li>
        </ul>
    );
}

export default LoginBar;