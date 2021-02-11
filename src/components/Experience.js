import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6><strong>EXPERIENCES</strong>

                    </h6>
                    <div className="row">
                        <div className="col s12 m4 14 x14">
                            <p className="teal year_exp white-text">
                                <strong>2016</strong> - Month
                                <strong>2017
                                </strong>
                            </p>
                        </div>
                        <div className="col s12 m8 18 x18">
                            <blockquote className="no-pad">
                                <h6 className="no-pad mt-bottom">
                                    <strong>
                                        WEB DEVELOPER
                                    </strong>
                                    <p>
                                        LOREM
                                    </p>
                                </h6>
                            </blockquote>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Experience;