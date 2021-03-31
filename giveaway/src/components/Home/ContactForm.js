import Deco from "../../assets/decoration.svg";
import '../../scss/home-page/_contact.scss';

const ContactForm = () => {
    return (
        <section className='contact__section'>
            <div className='form__section'>
                <div className='text__section'>
                    <h1>Contact us</h1>
                    <img src={Deco} alt="decoration" className="img__deco"/>
                </div>
                <form className='contact__form'>
                    <div className='data__info'>
                        <label className='name__label'>Write your name
                            <input type='text' placeholder='James'/>
                        </label>
                        <label className='name__label'>Write your email
                            <input type='text' placeholder='abc@xyz.pl'/>
                        </label>
                    </div>
                    <div>
                        <label className='name__label'>Write your message
                            <textarea type='textarea'
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <input type='submit' value='Send'/>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
