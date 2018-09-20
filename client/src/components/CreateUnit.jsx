import React, { Component } from 'react';

// CreateGrade class component pulling id from the newly created dog(props)
// set training states to default as false
class CreateGrade extends Component {
    constructor(props) {
        const {selectedStudent}= props
        super(props);
        this.state = {
            unit_name: '',
            run: false,
            gallop: false,
            hop: false,
            skip: false,
            jump: false,
            students_id: selectedStudent.id,
        };
        // bind handle change and handle submit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle submit passing the current state up
    // to app.jsx (createUnit) with new grades
    handleSubmit(ev) {
        ev.preventDefault();
        this.props.newUnit(this.state);
    };

    // handle change
    // sets state when checked to true
    // sets state when not checked to false
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        const { name } = e.target;

        this.setState({
            [name]: value
        })
        // if (e.target.checked) {
        // this.setState({[name]: true}) 
        // } else {
        //   this.setState({[name]: false})
        // }
      }

    // renders the create unit form
    // checkboxes for each teaching topic
    render() {
        return (
            <div>
                <div className="createForm">
                    <h2 className="pageHeader createformtitle">Add a Unit to Your Student:</h2>
                    <form onSubmit={this.handleSubmit} className="form">
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
                        <input
                            type="submit"
                            value="Create Grade Card" 
                            className="submitGrade"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateGrade;