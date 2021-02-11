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
            Lorem 
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
                            Area:
                        </strong>
                    </p>
                    <p>
                        <strong>
                            Email:
                        </strong>
                    </p>
                    <p>
                        <strong>
                            Phone:
                        </strong>
                    </p>
                </div>
                <div className="s12 m6 16 x16">
                    <p>
                        <strong>
                            Languages:
                        </strong>
                    </p>
                </div>
                </div>
            </div>                
            </div>
        );
    }
}

export default About;