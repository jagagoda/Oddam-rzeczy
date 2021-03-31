import Deco from "../../assets/decoration.svg";
import Sign from '../../assets/signature.svg';
import '../../scss/home-page/_about.scss';

const About = () => {
    return (
        <section className='about__section'>
            <div className="about__text">
                <h1>About us</h1>
                <img src={Deco} alt="decoration" className="img__deco"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Sign} alt="signature" className="img__signature"/>
            </div>
        </section>
    );
};

export default About;
