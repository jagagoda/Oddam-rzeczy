import '../../scss/home-page/_steps.scss';
import Shirt from '../../assets/icon1.svg';
import Bag from '../../assets/icon2.svg';
import Loop from '../../assets/icon3.svg';
import Cycle from '../../assets/icon4.svg';
import Deco from '../../assets/decoration.svg';

const StepsSection = () => {
    return (
        <section className="steps__section">
            <div className="steps__text">
                <p>Wystarczą 4 proste kroki</p>
                <img src={Deco} alt="dekoracja"/>
            </div>
            <div className="steps__icon">
                <div className="icon">
                    <img src={Shirt} alt="ikona ubrania"/>
                    <h4>Wybierz rzeczy</h4>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="icon">
                    <img src={Bag} alt="ikona worka na śmieci"/>
                    <h4>Wybierz rzeczy</h4>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="icon">
                    <img src={Loop} alt="ikona lupy"/>
                    <h4>Wybierz rzeczy</h4>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="icon">
                    <img src={Cycle} alt="ikona cyklu"/>
                    <h4>Wybierz rzeczy</h4>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
