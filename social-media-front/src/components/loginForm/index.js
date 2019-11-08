import React, { Component } from 'react';
import LoginButton from '../btn/btn-login';
import '../styles.css';


class LoginForm extends Component {
    render() {
        return (

            <section id='login'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input required
                            type='email'
                            placeholder='Email'
                            name='email-login'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    <input required
                            type='password'
                            placeholder='Contraseña'
                            name='password-login'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </label>
                    <LoginButton />                       
                </form>
            </section>
        )
    }
}

export default LoginForm;


