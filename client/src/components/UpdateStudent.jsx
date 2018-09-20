import React, { Component } from 'react';

// UpdateStudent Component
// pass props to state for one student
class UpdateStudent extends Component {
    constructor(props) {
        super(props);

        const { selectedStudent } = props;
        this.state = {
            id: selectedStudent.id,
            student_name: selectedStudent.name,
            age: selectedStudent.age,
            grade: selectedStudent.grade,
        };

        // bind handleChange and handleSubmit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle submit passes data from state back to App.jsx
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: this.state.id,
            student_name: this.state.student_name,
            age: this.state.age,
            grade: this.state.grade,
        }
        this.props.onSubmit(data);
    }

    // handle change and set state
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    // render the update student profile page with pre-set values
    render() {
        return (
            <div>
                <h2> Update Profile </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Student Name:  </label>
                    <input
                        name="student_name"
                        value={this.state.student_name}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Age:  </label>
                    <select
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} >
                        <option value="" disabled>Choose the age:</option>
                        <option value="4">4yrs</option>
                        <option value="5">5yrs</option>
                        <option value="6">6yrs</option>
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <input type="submit" value="Update Profile" />
                </form>
            </div>
        )
    };
}

export default UpdateStudent;