import React, { Component } from 'react';
import img from '../images/lol.jpg';
import {HashLink as Link } from "react-router-hash-link";
class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={img} alt="Julian Mendoza"/>
                        <Link className="btn-floating halfway-fav waves-effect wave-light">
                        <i className="material-icons activator">more_vert</i>
                        </Link>   
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Julian Mendoza
                        </span>
                        <p>
                            Software Developer
                        </p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">
                            Contact Me
                            <i className="material-icons right">close</i>
                        </span>
                        <p className="flex-container">
                            <i className="fab fa-linkedin grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-github grey-text text-darken-4 social-style"></i>
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;