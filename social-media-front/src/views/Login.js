import React, { Component } from 'react';

import Navbar from '../components/navbar/index';
import RegisterForm from '../components/registerForm/index';
import LoginForm from '../components/loginForm/index';

import './styles.css';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
            <main id="register-page">
                <section id="img-register-page"></section>
                <section id="form-register-page">
                    <article id="all-forms">
                    <LoginForm />
                    <div>
                    <RegisterForm />
                    </div>   
                    </article> 
                </section>
            </main>
            </React.Fragment>
        );
    }
}

export default Login