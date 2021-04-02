import '../../scss/home-page/_button.scss';
import { Link } from 'react-router-dom';

const Button = ({text, onClick, to}) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className='btn'>
            {text}
        </Link>
    );
};
export default Button;