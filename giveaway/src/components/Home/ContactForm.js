import Deco from "../../assets/decoration.svg";
import '../../scss/home-page/_contact.scss';
import React from "react";
import {useFormik} from "formik";


const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: ``,
            email: ``,
            message: ``
        },
        validate: values => {
            let errors = {}
            if (!values.name || values.name.trim().includes(' ')) {
                errors.name = "Invalid name"
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.message.length < 120) {
                errors.message = "Message should contain at least 120 characters"
            }
            return errors;
        },
        onSubmit: values => {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
    })

    return (
        <>
        <section className='contact__form'>
            <form onSubmit={formik.handleSubmit}>
                <div className="bottom__form">
                    <h1>Contact us!</h1>
                    <img src={Deco} alt="decoration"/>
                </div>
                <div className="form__data">
                    <div className="form__name">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" name="name" onChange={formik.handleChange}
                               value={formik.values.name} onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name ?
                            <div className='error'>{formik.errors.name} </div> : null}
                    </div>
                    <div className="form__email">
                        <label htmlFor="email">Enter your e-mail</label>
                        <input type="email" id="email" name="email" onChange={formik.handleChange}
                               value={formik.values.email} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email ?
                            <div className='error'>{formik.errors.email} </div> : null}
                    </div>
                </div>
                <div className="form__message">
                    <label htmlFor="msg">Write your message</label>
                    <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message}
                              onBlur={formik.handleBlur}/>
                    {formik.touched.message && formik.errors.message ?
                        <div className='error'>{formik.errors.message} </div> : null}
                    <button type='submit'>Send</button>
                </div>
            </form>
        </section>
    </>
    )
}
export default ContactForm;