import Deco from "../../assets/decoration.svg";
import '../../scss/home-page/_contact.scss';

const ContactForm = () => {
    return (
        <section className='contact__section'>
            <div className='form__section'>
                <div className='text__section'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={Deco} alt="dekoracja" className="img__deco"/>
                </div>
                <form className='contact__form'>
                    <div className='data__info'>
                        <label className='name__label'>Wpisz swoje imię
                            <input type='text' placeholder='Krzysztof'/>
                        </label>
                        <label className='name__label'>Wpisz swój email
                            <input type='text' placeholder='abc@xyz.pl'/>
                        </label>
                    </div>
                    <div>
                        <label className='name__label'>Wpisz swoją wiadomość
                            <textarea type='textarea'
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <input type='submit' value='Wyślij'/>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
