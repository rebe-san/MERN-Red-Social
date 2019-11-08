import React, { Component } from 'react';

import Navbar from '../components/navbar/index';
import RegisterForm from '../components/registerForm/index';
import LoginForm from '../components/loginForm/index';

class Login extends Component {
    render() {
        return (
            <main className="container">
                <Navbar />
                <RegisterForm />
                <LoginForm />
            </main>
        );
    }
}

export default Login