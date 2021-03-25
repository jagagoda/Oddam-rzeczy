import '../../scss/home-page/_button.scss';

const Button = ({text, onClick}) => {
    return (
        <button
            onClick={onClick}
            className='btn'>
            {text}
        </button>
    );
};
export default Button;