import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class EditButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" ><i class="fas fa-pen"></i></button>
                </Link>
            </label> 
        )
    }
}

export default EditButton;
