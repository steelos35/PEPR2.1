import React, { Component } from 'react';

// Update Grades class component
// passing props to state
class UpdateUnits extends Component {
    constructor(props) {
        super(props);

        const { units } = props;
        this.state = {
            students_id: units.students_id,
            unit_name: units.unit_name,
            run: units.run,
            gallop: units.gallop,
            hop: units.hop,
            skip: units.skip,
            jump: units.jump,
        };

        // bind handleChange and handleSubmit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handle submit, sending state back to App.jsx
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            students_id: this.state.students_id,
            unit_name: this.state.unit_name,
            run: this.state.run,
            gallop: this.state.gallop,
            hop: this.state.hop,
            skip: this.state.skip,
            jump: this.state.jump,
        }
        this.props.onSubmit(data);
    }

    // handle change function
    // sets state to true if target is checked
    // sets state to false if target is not clicked
    handleChange(e) {
        const { student_name } = e.target;
        if (e.target.checked) {
            this.setState({ [student_name]: true })
        } else {
            this.setState({ [student_name]: false })
        }
    }

    // render update grades form with pre-set values
    render() {
        // const { unit_name, run, gallop, hop, skip, jump } = this.state;
        return (
            <div>
                <h2> Update Grades </h2>
                <form onSubmit={this.handleSubmit}>
                <label>Unit Name:</label>
                        <input
                            type="text"
                            name="unit_name"
                            value={this.state.unit_name}
                            onChange={this.handleChange}
                            required />
                        <br />
                        <br />
                        <label>Run:</label>
                        <input
                            type="checkbox"
                            name="run"
                            value={this.state.run}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Gallop:</label>
                        <input
                            type="checkbox"
                            name="gallop"
                            value={this.state.gallop}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Hop:</label>
                        <input 
                            type="checkbox"
                            name="hop"
                            value={this.state.hop}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Skip:</label>
                        <input 
                            type="checkbox"
                            name="skip"
                            value={this.state.skip}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Jump:</label>
                        <input
                            type="checkbox"
                            name="jump"
                            value={this.state.jump}
                            onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Update Unit" />
                </form>
            </div>
        )
    };
}

export default UpdateUnits;







