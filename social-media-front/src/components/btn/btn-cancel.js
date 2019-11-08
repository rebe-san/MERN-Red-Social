import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class CancelButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" >Cancelar</button>
                </Link>
            </label> 
        )
    }
}

export default CancelButton;




