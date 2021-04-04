import React from 'react';

const LoginForm = ({email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError}) => {
    return (
        <section className='login'>
            <div className="login__container">
                <label className="user__name">User name</label>
                <input
                    type="text"
                    autoFocus required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label className="password">Password</label>
                <input
                    type="password"
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className='btn__container'>
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign up</button>
                            <p>Have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default LoginForm;
