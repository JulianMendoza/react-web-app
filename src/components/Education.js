import React, { Component } from 'react';
class Education extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h6><strong>EDUCATION</strong></h6>
                    <table className="striped">
                       <tbody>
                           <tr>
                               <td><strong>Carleton University</strong></td>
                               <td>Sept. 2017 - Present</td>
                           </tr>
                           <tr>
                               <td style={{paddingLeft:"20px"}}>
                               B.Eng Software Engineering 2022<br/>
                               Fourth-year Student<br/>
                               CGPA: 10.69/12<br/>
                               Attained Dean's Honor List throughout all semesters<br/>
                               </td>
                           </tr>
                       </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default Education;