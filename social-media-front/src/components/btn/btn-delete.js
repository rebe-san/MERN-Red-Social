import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class DeleteButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" ><i class="fas fa-trash "></i></button>
                </Link>
            </label> 
        )
    }
}

export default DeleteButton;




