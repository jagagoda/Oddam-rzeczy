import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import '../../scss/home-page/_footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright by Coders Lab</p>
            <div className="footer__icons">
                <a href='https://www.facebook.pl/'>
                    <img src={facebook} alt="facebook icon"/>
                </a>
                <a href='https://www.instagram.com/'>
                    <img src={instagram} alt="instagram icon"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
