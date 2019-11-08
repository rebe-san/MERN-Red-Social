import React, { Component } from 'react';


class RegisterForm extends Component {
    render() {
        return (

            <div className='register'>
                <form onSubmit={this.handleSubmit}>
                      {/* user field */}
                      <div className='form-group'>
                      <label for="user" className="col-sm-2 col-form-label">Usuario</label>
                        <input required
                            type='text'
                            placeholder='Usuario'
                            name='user'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* email field */}
                    <div className='form-group'>
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                        <input required
                            type='email'
                            placeholder='Email'
                            name='email'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                    {/* password field */}
                    <div className='form-group'>
                    <label className="col-sm-2 col-form-label" for="password">Contraseña</label>
                        <input required
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                     {/* confirm-password field */}
                     <div className='form-group'>
                     <label className="col-sm-2 col-form-label" for="confirm-password">Confirmar contraseña</label>
                        <input required
                            type='password'
                            placeholder='Confirmar contraseña'
                            name='confirm-password'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default RegisterForm;


