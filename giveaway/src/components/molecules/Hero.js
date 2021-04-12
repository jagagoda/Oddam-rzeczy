import '../../scss/home-page/_hero.scss';
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const Hero = ({to}) => {
    return (
        <section className="hero__container">
            <div className="hero__text">
                <Title mainText='Start to help!' text='Give away unwanted stuff'/>
                <div className="hero__buttons">
                    <Button to="/donate" text='Give away things'>
                        <p>Give<br/> away <br/>things</p>
                    </Button>
                    <Button to="/donate" text='Organize a collection'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
