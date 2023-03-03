import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';

const Login = () => {
    return (
        <main className='main-wrapper-login'>
            <section className='login-container'>
                <form className='login-form'>
                    <h3 className='login-title'></h3>
                    <p className='login-reg'></p>
                    <div className='input-area'>
                        <label className='login-label'></label>
                        <Input/>
                    </div>
                    <Button/>
                </form>
            </section>
        </main>
    );
};

export default Login;