import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='card'>
            <div className='card-content'>
            <h6 className='mt-bottom'>
                <strong>
                    ABOUT ME
                </strong>
            </h6>
            <p className='grey-text'>
            Software Engineering student offering a strong foundation in software architecture and design. Primarily experienced
in object-oriented programming; developing and testing code in Java. Adequate knowledge of project management
and software development lifecycles. Passionate teacher and learner; Teaching Assistant for the Systems and
Computer Engineering department at Carleton University for four semesters.
            </p>    
            </div>
            <div className='card-action'>
                <h6>
                <strong>
                    PERSONAL INFO
                </strong>
                </h6>
                <div className='row mt'>
                <div className='col s12 m6 16 x16'>
                    <p>
                        <strong>
                            Area:&nbsp; 
                        </strong>
                        Ottawa, ON. K2C 1J9 
                    </p>
                    <p>
                        <strong>
                            Email:&nbsp; 
                        </strong>
                        julianjohn.mendoza@gmail.com
                    </p>
                </div>
                <div className="s12 m6 16 x16">
                <p>
                        <strong>
                            Phone:&nbsp; 
                        </strong>
                        613-200-9689
                    </p>
                </div>
                </div>
            </div>                
            </div>
        );
    }
}

export default About;