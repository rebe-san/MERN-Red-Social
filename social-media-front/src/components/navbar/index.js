import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'
import '../styles.css'

class Navbar extends Component {
    render() {
        return ( 
            <header>
                <nav>
                    <figure>
                        <Link to="/feed"><img src = { Logo } alt = 'HuertApp logo'/></Link>
                    </figure> 
                </nav> 
            </header>
        )
    }
}

export default Navbar;