import React from 'react';
import Deco from '../../assets/decoration.svg';

const Title = ({ mainText, text }) => {
    return (
        <div className='title'>
            {mainText && <h2>{mainText}</h2>}
            <h2>{text}</h2>
            <img className='image__deco' src={Deco} alt="underline decoration" />
        </div>
    );
}

export default Title;