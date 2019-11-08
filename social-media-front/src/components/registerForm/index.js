import React, { Component } from 'react'; 
import '../styles.css';


class RegisterForm extends Component {
    render() {
        return (

            <section id='register'>
                <h2>Registro</h2>
                <form onSubmit={this.handleSubmit}>
                      {/* user field */}
                      <div className='form-group'>
                      <label className="col-sm-2 col-form-label">Usuario
                      <input required
                            type='text'
                            placeholder='Usuario'
                            name='user'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                      </label>
                        
                    </div>
                    {/* email field */}
                    <div className='form-group'>
                    <label className="col-sm-2 col-form-label">Email
                    <input required
                            type='email'
                            placeholder='Email'
                            name='email'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </label>
                        
                    </div>

                    {/* password field */}
                    <div className='form-group'>
                    <label className="col-sm-2 col-form-label" >Contraseña
                    <input required
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                    </label>
                        
                    </div>

                     {/* confirm-password field */}
                     <div className='form-group'>
                     <label className="col-sm-2 col-form-label">Confirmar contraseña
                     <input required
                            type='password'
                            placeholder='Confirmar contraseña'
                            name='confirm-password'
                            className='form-control'
                            // value={this.state.user}
                            onChange={this.handleChange}
                        />
                     </label>
                        
                    </div>

                </form>
            </section>
        )
    }
}

export default RegisterForm;


