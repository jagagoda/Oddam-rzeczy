import '../../scss/home-page/_steps.scss';
import Shirt from '../../assets/icon1.svg';
import Bag from '../../assets/icon2.svg';
import Lupe from '../../assets/icon3.svg';
import Cycle from '../../assets/icon4.svg';
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Step from "../molecules/Step";

const StepsSection = () => {
    return (
        <section className="steps__section" id='steps'>
            <div className="steps__text">
                <Title mainText='It is only 4 steps to help'/>
            </div>
            <div className='steps__icon'>
                <Step imgSrc={Shirt} imgAlt="t-shirt icon" title='Choose stuff' text='clothes, toys, accessories and other'/>
                <Step imgSrc={Bag} imgAlt="trash bag icon" title='Pack things' text='use the trash bags'/>
                <Step imgSrc={Lupe} imgAlt="lupe icon" title='Decide who to help' text='choose a trusted place'/>
                <Step imgSrc={Cycle} imgAlt="recycle icon" title='Order pick up' text='choose most suitable date for you'/>
            </div>
            <div className="step__button">
                <Button text='Give away things'/>
            </div>
        </section>
    );
}

export default StepsSection
