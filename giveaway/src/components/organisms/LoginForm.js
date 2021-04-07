import React from 'react';
import Title from "../atoms/Title";
import {Formik, Form} from 'formik';
import {TextInput} from "../atoms/FormLib";
import * as Yup from 'yup';
import LoginBar from "../molecules/LoginBar";
import NavBar from "../molecules/NavBar";
import '../../scss/home-page/_signup.scss';
import '../../scss/login-page/_login.scss';
import {useFormik} from "formik";

import { useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
    const history = useHistory();
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: ``,
            password: ``
        },
        validate: values => {
            let errors = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.password.length < 6) {
                errors.password = "Password should be longer than 6"
            }
            return errors
        },
        onSubmit: values => {
            login(values.email, values.password)
            history.push("/")

        }})
    return (
        <section className='form'>
            <LoginBar />
            <NavBar />
                <Title mainText="Login"/>
                <div className='signup__form'>
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='form__inputs'>
                            <label htmlFor='email'>Email</label>
                            {formik.touched.email && formik.errors.email ?
                                <div className='error__user'>{formik.errors.email} </div> : null}
                            <input
                                id='email'
                                type='email'
                                htmlFor='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur} />
                            <label htmlFor='password'>Password</label>
                            {formik.touched.password && formik.errors.password ?
                                <div className='error__user'>{formik.errors.password} </div> : null}
                            <input
                                id='password'
                                type='password'
                                htmlFor='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur} />
                        </div>
                    </form>
                    <div className="signup__buttons">
                        <button onClick={()=> history.push("/signup")} type="submit"  className="signup__btn">Sign up</button>
                        <button  onClick={()=> history.push("/donate")} type="submit"  className="signup__btn">Login</button>
                    </div>
                </div>
        </section>
    );
};

export default LoginForm;
