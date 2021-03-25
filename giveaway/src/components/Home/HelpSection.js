import '../../scss/home-page/_help.scss';
import Deco from "../../assets/decoration.svg";
import Button from "./Button";


const HelpSection = () => {
    return (
        <section className="help__section">
            <div className="help__header">
                <h1>Komu pomagamy?</h1>
                <img src={Deco} alt="dekoracja" className="img__deco"/>
            </div>
            <div className="help__columns">
                <button className="help__btn">Fundacjom</button>
                <button className="help__btn">Organizacjom<br/> pozarządowym</button>
                <button className="help__btn">Lokalnym<br/> zbiórkom</button>
            </div>
        </section>
    );
};

export default HelpSection;
