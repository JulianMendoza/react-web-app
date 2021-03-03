import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Education from './Education'
import Skills from './Skills'
import Profile from './Profile'
import Experience from './Experience'
import About from './About'
class Home extends Component {
    render() {
        return (
            <section>
                <Navbar/>
                <div classname="container">
                    <div className="row">
                        <div className=" col s12 m2">
                        <Profile/>
                        </div>
                        <div className="col s12 m9">
                            <About/>
                            <Skills/>
                            <Experience/>
                            <Education/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;