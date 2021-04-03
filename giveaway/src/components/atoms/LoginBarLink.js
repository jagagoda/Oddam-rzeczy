import { NavLink } from 'react-router-dom';
const LoginBarLink = ({ text, path }) => {
    return (
        <NavLink to={path}>
            {text}
        </NavLink>
    );
}
export default LoginBarLink;