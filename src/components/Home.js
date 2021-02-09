import React, { Component } from 'react';
import Navbar from './Navbar'
import Education from './Education'
import Skills from './Skills'
import Profile from './Profile'
import Experience from './Experience'
import Portfolio from './Portfolio'
import About from './About'
class Home extends Component {
    render() {
        return (
            <section>
                <Navbar/>
                <div classname="container">
                    <div className="row">
                        <div className=" col s12 m3">
                        <Profile/>
                        </div>
                        <div className="col s12 m9">
                            <About/>
                            <Skills/>
                            <Experience/>
                            <Education/>
                            <Portfolio/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;