import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class LoginButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" >Inicia sesión</button>
                </Link>
            </label> 
        )
    }
}

export default LoginButton;




