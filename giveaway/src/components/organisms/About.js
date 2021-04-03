import Sign from '../../assets/signature.svg';
import '../../scss/home-page/_about.scss';
import Title from "../atoms/Title";

const About = () => {
    return (
        <section className='about__section' id='about'>
            <div className="about__text">
                <Title mainText='About us' />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Sign} alt="signature" className="img__signature"/>
            </div>
        </section>
    );
};

export default About;
