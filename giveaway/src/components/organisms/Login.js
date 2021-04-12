import React from 'react';
import Title from "../atoms/Title";
import {Formik, Form} from 'formik';
import {TextInput} from "../atoms/FormLib";
import * as Yup from 'yup';
import LoginBar from "../molecules/LoginBar";
import NavBar from "../molecules/NavBar";
import '../../scss/home-page/_signup.scss';
import '../../scss/login-page/_login.scss';


import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    return (
        <section className='form'>
            <LoginBar />
            <NavBar />
            <Title mainText="Login"/>
            <div className='signup__form'>
                <Formik
                    className="formik"
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
                            />
                        </Form>
                    )}
                </Formik>
                <div className="signup__buttons">
                    <button onClick={()=> history.push("/signup")} type="submit"  className="signup__btn">Sign up</button>
                    <button  onClick={()=> history.push("/donate")} type="submit"  className="signup__btn">Login</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
