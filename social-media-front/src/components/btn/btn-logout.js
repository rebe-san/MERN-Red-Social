import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class LogoutButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" >Cerrar sesión</button>
                </Link>
            </label> 
        )
    }
}

export default LogoutButton;
