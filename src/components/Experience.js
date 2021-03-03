import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6><strong>EXPERIENCE</strong>

                    </h6>
                    <div className="row">
                        <div className="col s12 m4 14 x14">
                            <p className="teal year_exp white-text">
                                <strong>Sept. 2019</strong> - 
                                <strong> Present</strong>
                            </p>
                        </div>
                        <div className="col s12 m8 18 x18">
                            <blockquote className="no-pad">
                                <h6 className="no-pad mt-bottom">
                                  
                                    <strong>
                                        Carleton University
                                    </strong> - 
                                    <em>
                                        Teaching Assitant
                                    </em>
                                    <p>
                                        ECOR 1051 | SYSC 2100 | ECOR 1041 | SYSC 2004
                                    </p>
                                </h6>
                            </blockquote>
                            <div className="content">
                                <li>Provided an interactive learning environment during lab sessions.
                                    </li>
                                    <li>
                                    Demonstrated fundamental programming concepts in real-time via Discord.
                                    </li>
                                    <li>
                                    Marked assignments, projects and midterms promptly with constructive critisim.
                                    </li>
                                    </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 14 x14">
                            <p className="teal year_exp white-text">
                                <strong>Jan. 2020</strong> - 
                                <strong> Apr. 2020</strong>
                            </p>
                        </div>
                        <div className="col s12 m8 18 x18">
                            <blockquote className="no-pad">
                                <h6 className="no-pad mt-bottom">
                                  
                                    <strong>
                                        Canada Revenue Agency
                                    </strong> - 
                                    <em>
                                        IT Developer (Part-Time) 
                                    </em>
                                    <p>
                                       Designed a web-based dashboard in Angular 8
                                    </p>
                                </h6>
                            </blockquote>
                            <div className="content">
                                <li>
                                    Worked under the Strategic Engineering &amp; Technology Integration Division in an agile environment
                                </li>
                                <li>
                                    Performed social media analysis on Twitter as a proof of concept for using cloud technology
                                </li>
                                    <li>
                                    Used a micro-front end (SPA) architecture to display different modules containing graphs, statistics and tables.
                                    </li>
                                    <li>Created quick, responsive and eye-catching modules using Leaflet.js &amp; Chart.js
                                    </li>
                                    <li>
                                    Studied the basics of cloud technology and achieved a certificate on Azure Fundamentals
                                    </li>
                                    </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Experience;