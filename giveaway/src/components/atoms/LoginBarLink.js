import { Link } from 'react-router-dom';
import React from 'react';

const LoginBarLink = ({text, path}) => {
    return (
            <Link to={path}>
                {text}
            </Link>
    );
};
export default LoginBarLink;