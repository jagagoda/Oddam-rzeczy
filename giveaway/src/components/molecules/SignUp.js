import React from 'react';
import Title from "../atoms/Title";
import {Formik, Form} from 'formik';
import {TextInput} from "../atoms/FormLib";
import * as Yup from 'yup';
import LoginBar from "./LoginBar";
import NavBar from "./NavBar";
import '../../scss/home-page/_signup.scss';

import {connect} from 'react-redux';
import {signupUser} from "../templates/auth/actions/userActions";
import {useHistory} from 'react-router-dom';

const SignUp = ({signupUser}) => {
    const history = useHistory();
    return (
        <section className='form'>
            <LoginBar/>
            <NavBar/>
            <Title mainText="Sign up"/>
            <div className='signup__form'>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                                .email("Invalid email address")
                                .required("Required"),
                            password: Yup.string()
                                .min(6, "Password is too short")
                                .max(20, "Password is too long")
                                .required("Required"),
                            repeatPassword: Yup.string()
                                .required("Required").oneOf([Yup.ref("password")], "Passwords must much")
                        })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        signupUser(values, history, setFieldError, setSubmitting)
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
                                label="Password"
                                placeholder="*********"
                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat password"
                                placeholder="*********"
                            />
                        </Form>
                    )}
                </Formik>
                <div className="signup__buttons">
                    <button  className=" signup__btn">Login</button>
                    <button  className=" signup__btn">Sign up</button>
                </div>
            </div>
        </section>
    );
};

export default connect(null, {signupUser})(SignUp);