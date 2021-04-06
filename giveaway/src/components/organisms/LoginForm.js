import React from 'react';
import Title from "../atoms/Title";
import {Formik, Form} from 'formik';
import {TextInput} from "../atoms/FormLib";
import * as Yup from 'yup';
import LoginBar from "../molecules/LoginBar";
import NavBar from "../molecules/NavBar";
import '../../scss/home-page/_signup.scss';

import { connect } from 'react-redux';
import { loginUser } from "../templates/auth/actions/userActions";
import { useHistory } from 'react-router-dom';

const LoginForm = ({loginUser}) => {
    const history = useHistory();
    return (
        <section className='form'>
            <LoginBar />
            <NavBar />
                <Title mainText="Login"/>
                <div className='signup__form'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string().email("Invalid email address")
                                    .required("Required"),
                                password: Yup.string()
                                    .min(6, "Password is too short")
                                    .max(20, "Password is too long")
                                    .required("Required"),
                            })
                        }
                        onSubmit={(values, {setSubmitting, setFieldError}) => {
                            console.log(values);
                            loginUser(values, history, setFieldError, setSubmitting)
                        }}
                    >
                        {({isSubmitting}) => (
                        <Form className="form__inputs">
                            <TextInput
                                name="email"
                                type="text"
                                label="Email"
                                placeholder="abc@xyz.com"
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="password"
                                placeholder="*********"
                            />
                        </Form>
                        )}
                    </Formik>
                    <div className="signup__buttons">
                        <button type="submit"  className="signup__btn">Sign up</button>
                        <button type="submit"  className="signup__btn">Login</button>
                    </div>
                </div>
        </section>
    );
};

export default connect(null, {loginUser})(LoginForm);
