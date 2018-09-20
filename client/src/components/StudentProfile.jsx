import React, { Component } from 'react';

// StudentProfile component passing props to state
class StudentProfile extends Component {
    constructor(props) {
        super(props);
    }

    //Render a student's profile
    //Display students's information and student's grades.
    render() {
        return (
            <div className="profilePage">
                <div className="StudentProfilegrid-container">
                    {/* <h2>{this.state.name}</h2> */}
                    <div className="grid-cell">
                        <p>Student Name: {this.props.student.student_name}</p><br />
                        <p>Age: {this.props.student.age}</p><br />
                        <p>Grade: {this.props.student.grade}</p><br />
                    </div>
                    <div className="grid-cell center-cell">
                        <p className="profilename">{this.props.student.student_name}</p>
                        <div className="StudentProfilebuttons">
                            <button
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    const studentState = { ...this.props.student, ...this.props.studentUnit };
                                    this.props.editStudent(studentState)
                                }} >
                                Edit Student Info
              </button>
                            <button onClick={(ev) => {
                                ev.preventDefault();
                                const student = { ...this.props.student, ...this.props.studentUnit };
                                this.props.handleDeleteStudent(student)
                            }} >
                                Delete Profile</button>
                        </div>
                    </div>
                    {this.props.studentUnit ?
                        (<div className="grid-cell">
                            <p>Run: {this.props.studentUnit.run ? "✔️" : "❌"}</p>
                            <br />
                            <p>Gallop: {this.props.studentUnit.gallop ? "✔️" : "❌"}</p>
                            <br />
                            <p>Hop: {this.props.studentUnit.hop ? "✔️" : "❌"}</p>
                            <br />
                            <p>Skip: {this.props.studentUnit.skip ? "✔️" : "❌"}</p>
                            <br />
                            <p>Jump: {this.props.studentUnit.jump ? "✔️" : "❌"}</p>
                        </div>)
                        :
                        (
                            <button onClick={() => {
                                this.props.setView('Create Unit')
                            }}>Create unit</button>
                        )
                    }
                </div>
            </div>
        );
    }

}


export default StudentProfile;