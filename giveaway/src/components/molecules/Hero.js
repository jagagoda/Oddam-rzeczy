import '../../scss/home-page/_hero.scss';
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const Hero = ({to}) => {
    return (
        <section className="hero__container">
            <div className="hero__text">
                <Title mainText='Start to help!' text='Give away unwanted stuff'/>
                <Button to={to} text='Give away things'/>
                <Button to={to} text='Organize a collection'/>
            </div>
        </section>
    );
};

export default Hero;
