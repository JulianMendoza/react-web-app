import React, { Component } from 'react';
import img from '../images/julianavatar.svg';
class Profile extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-image">
                <img className="activator" src={img} alt="Julian Mendoza"/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    Julian Mendoza
                </span>
                <p>
                    Software Developer
                </p>
                <span className="card-title grey-text text-darken-4">
                    Contact Me
                </span>
                <p className="flex-container">
                    <i className="fab fa-linkedin grey-text text-darken-4 social-style"></i>
                    <i className="fab fa-github grey-text text-darken-4 social-style"></i>
                </p>
            </div>
        </div>
        );
    }
}

export default Profile;