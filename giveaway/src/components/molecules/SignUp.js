// import React from 'react';
// import Title from "../atoms/Title";
// import {Formik, Form} from 'formik';
// import {TextInput} from "../atoms/FormLib";
// import * as Yup from 'yup';
//
// const SignUp = () => {
//     return (
//         <section className='login__form'>
//             <>
//                 <Title mainText="Sign up"/>
//                 <div className='signup__form'>
//                     <Formik
//                         initialValues={{
//                             email: "",
//                             password: "",
//                             repeatPassword: "",
//                         }}
//                         validationSchema={
//                             Yup.object({
//                                 email: Yup.string().email("Invalid email address")
//                                     .required("Required"),
//                                 password: Yup.string()
//                                     .min(6, "Password is too short")
//                                     .max(20, "Password is too long")
//                                     .required("Required"),
//                                 repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must much")
//                             })
//                         }
//                         onSubmit={(values, {setSubmitting}) => {
//                             console.log(values);
//                         }}
//                     >
//                         <>
//                             <Form>
//                                 <TextInput
//                                     name="email"
//                                     type="text"
//                                     label="Email"
//                                     placeholder="abc@xyz.com"
//                                 />
//
//                                 <TextInput
//                                     name="password"
//                                     type="password"
//                                     label="Password"
//                                     placeholder="*********"
//                                 />
//                                 <TextInput
//                                     name="repeatPassword"
//                                     type="password"
//                                     label="Repeat password"
//                                     placeholder="*********"
//                                 />
//                                 <div className="login__buttons">
//                                     <buttonLink to="/" className="btn login__btn">Login</buttonLink>
//                                     <buttonLink to="/signup" className="btn login__btn">Sign up</buttonLink>
//                                 </div>
//                             </Form>
//                         </>
//                         )}
//                     </Formik>
//                 </div>
//             </>
//         </section>
//     );
// };
//
// export default SignUp;