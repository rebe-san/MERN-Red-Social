import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';


class CommentButton extends Component {
    render() {
        return (
            <label>
                <Link to="/feed">
                    <button type="submit" id="button-login" >Comentar</button>
                </Link>
            </label> 
        )
    }
}

export default CommentButton;




