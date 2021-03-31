import '../../scss/home-page/_steps.scss';
import Shirt from '../../assets/icon1.svg';
import Bag from '../../assets/icon2.svg';
import Loop from '../../assets/icon3.svg';
import Cycle from '../../assets/icon4.svg';
import Deco from '../../assets/decoration.svg';
import Button from "./Button";

const StepsSection = () => {
    return (
        <section className="steps__section">
            <div className="steps__text">
                <p>It is only 4 steps!</p>
                <img src={Deco} alt="decoration"/>
            </div>
            <div className="steps__icon">
                <div className="icon">
                    <img src={Shirt} alt="cloth icon"/>
                    <h4>Pick things</h4>
                    <p>clothes, toys, accessories and other</p>
                </div>
                <div className="icon">
                    <img src={Bag} alt="trash bag icon"/>
                    <h4>Pack things</h4>
                    <p>use the trash bags</p>
                </div>
                <div className="icon">
                    <img src={Loop} alt="ikona lupy"/>
                    <h4>Decide who to help</h4>
                    <p>choose a trusted place</p>
                </div>
                <div className="icon">
                    <img src={Cycle} alt="ikona cyklu"/>
                    <h4>Order a courier</h4>
                    <p>you can choose most suitable date for you</p>
                </div>
            </div>
            <div className="step__button">
                <Button text='Giveaway things'/>
            </div>
        </section>
    );
}

export default StepsSection
