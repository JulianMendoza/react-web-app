import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
class Navbar extends Component {
    render() {
        return (
            <nav className="light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className='brand-logo'>
                            CV
                        </Link>
                        <Link to ='/' data-target='side-nav' className='sidenav-trigger'>
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-ned-and-down">
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-home"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-copy"></i>Skills
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;