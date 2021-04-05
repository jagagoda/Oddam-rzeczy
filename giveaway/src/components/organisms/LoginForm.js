import React from 'react';
import Title from "../atoms/Title";
import {Formik, Form} from 'formik';
import {TextInput} from "../atoms/FormLib";
import * as Yup from 'yup';

const LoginForm = () => {
    return (
        <section className='login__form'>
                <Title mainText="Login"/>
                <div className='login__form'>
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
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values);
                        }}
                    >
                        <Form>
                            <>
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
                            </>
                            <div className="login__buttons">
                                <button to="/" className="btn login__btn">Login</button>
                                <button to="/signup" className="btn login__btn">Sign up</button>
                            </div>

                        </Form>
                        )}
                    </Formik>
                </div>
        </section>
    );
};

export default LoginForm;

// const LoginForm = ({email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError}) => {
//     return (
//         <section className='login'>
//             <Title mainText='Login' />
//             <div className="login__container">
//                 <label className="user__name">Email</label>
//                 <input
//                     type="text"
//                     autoFocus
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <p className="errorMsg">{emailError}</p>
//                 <label className="password">Password</label>
//                 <input
//                     type="password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <p className="errorMsg">{passwordError}</p>
//             </div>
//                 <div className='btn__container'>
//                     {hasAccount ? (
//                         <>
//                         <button onClick={handleLogin}>Sign in</button>
//                                 <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
//                         </>
//                     ) : (
//                         <>
//                             <button onClick={handleSignUp}>Sign up</button>
//                                 <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
//                         </>
//                     )}
//                 </div>
//         </section>
//     );
// };
//
// export default LoginForm
