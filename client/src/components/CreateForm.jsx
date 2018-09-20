import React, { Component } from 'react';

// class component for the create form
// empty state to set state on change
class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_name: '',
            age: '',
            grade: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle submit function
    // prevent default-reload
    // calling props newStudent function and pass state

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.newStudent(this.state)
    };

    // handle change function
    // on event target {name and value}

    handleChange(ev) {
        ev.preventDefault();
        const { name, value } = ev.target;
        this.setState({
            [name]: value,
        });
    };

    // renders a create form
    render() {
        return (
            <div>
                <div className="createForm">
                    <h2 className="pageHeader createformtitle">Add a Student to Your Class:</h2>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label>Student's Name:</label>
                        <input
                            type="text"
                            name="student_name"
                            value={this.state.student}
                            onChange={this.handleChange}
                            required />
                        <br />
                        <br />
                        <label>Age:</label>
                        <select
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required >
                            <option value="" disabled>Choose the age:</option>
                            <option value="4">4 yrs Old</option>
                            <option value="5">5 yrs Old</option>
                            <option value="6">6 yrs Old</option>
                        </select>
                        <br />
                        <br />
                        <label>Grade:</label>
                        <select
                            name="grade"
                            value={this.state.grade}
                            onChange={this.handleChange}
                            required >
                            <option value="" disabled>Choose the grade:</option>
                            <option value="Kindergarten">Kindergarten</option>
                            <option value="1st Grade">1st Grade</option>
                            <option value="2nd Grade">2nd Grade</option>
                        </select>

                        <input
                            type="submit"
                            value="Create Student"
                            className="submitNewStudent" />
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateForm;