// import react and component class
import React, { Component } from 'react';
// import components
import StudentsIndex from './components/StudentsIndex';
import UpdateStudent from './components/UpdateStudent';
import StudentProfile from './components/StudentProfile';
import CreateForm from './components/CreateForm';
import Unit from './components/Unit'
import Header from './components/Header';
import CreateUnit from './components/CreateUnit';
import UpdateUnits from './components/UpdateUnits';

// import styling
import './index.css';

// import functions from api.js
import {
  fetchStudents,
  fetchOneStudent,
  updateStudent,
  fetchOneUnit,
  updateUnits,
  saveNewStudent,
  saveNewUnit,
  fetchAllUnits,
  deleteStudent,
} from './services/api';


// app component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [],
      studentUnit: [],
      students: [],
      selectedStudent: '',
      currentView: 'All Students',
      loading: false,
    }

    // bind functions to use this in callback
    this.toggleLoading = this.toggleLoading.bind(this);
    this.createStudent = this.createStudent.bind(this);
    this.createUnit = this.createUnit.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.editStudentUnits = this.editStudentUnits.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.editUnit = this.editUnit.bind(this);
    this.setView = this.setView.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }

  // when page loads, fetch all students and all units
  componentDidMount() {
    fetchStudents()
      .then(data => this.setState({ students: data.students }));
    fetchAllUnits()
      .then(data => this.setState({ units: data.units }));
  };

  //toggle whether the loading view is hidden-false/active-true
  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    })
  }


  // fetch all students and sets state to all students 
  // whenever top nav logo is clicked
  headerRenderToHome() {
    fetchStudents()
      .then(data => {
        this.setState({
          students: data.students,
          currentView: 'All Students'
        })
      })
  }

  // select one student & set state
  fetchOne(id) {
    fetchOneStudent(id)
      .then(data => this.setState({
        students: data.students,
        currentView: 'Student Profile'
      }))
  };

  // select student function
  selectStudent(student, units) {
    console.log(units[0])
    this.setState({
      selectedStudent: student,
      studentUnit: units[0],
      currentView: 'Student Profile'
    })
  };


  // edit student function
  editStudent(student) {
    this.setState({
      selectedStudent: student,
      currentView: 'Update Student'
    })
  }

  // edit unit function
  editUnit(units) {
    this.setState({
      studentUnit: units,
      currentView: 'Update Student'
    })
  }

  // create student function
  createStudent(student) {
    saveNewStudent(student)
      .then(data => {
        console.log(data);
        this.setState({
          currentView: 'Create Unit',
          selectedStudent: data.student,
        });
      })
      .then(data => fetchStudents())
      .then(data => this.setState({
        students: data.students
      }))
  };

  // create unit function
  createUnit(unit) {
    saveNewUnit(this.state.selectedStudent ,unit)
      .then(data => fetchAllUnits())
      .then(data => {
        this.setState({
          units: data.units,
          currentView: 'All Students',
        });
      })
  };


  // edit student function
  updateStudent(student) {
    updateStudent(student)
      .then(data => fetchOneStudent(student.id))
      .then(data => {
        this.setState({
          currentView: 'Student Profile',
          selectedStudent: data
        });
      })
  };

  // delete student function
  handleDeleteStudent(student) {
    deleteStudent(student)
      .then(data => fetchStudents())
      .then(data => {
        this.setState({
          currentView: 'All Students',
          students: data.students,
        });
      })
  }

  // edit student unit function
  editStudentUnits(student) {
    updateUnits(student)
      .then(data => fetchAllUnits())
      .then(data => {
        this.setState({
          units: data.units,
        })
        console.log(data);
      })
      .then(data => fetchOneUnit(student.students_id))
      .then(data => {
        this.setState({
          currentView: 'Student Profile',
          studentUnit: data
        })
      })
  }


  // function that sets currentView
  setView(view) {
    this.setState({
      currentView: view
    })
  }

  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { students, selectedStudent, units, studentUnit, fetchOne } = this.state;

    switch (currentView) {
      // All students view
      case 'All Students':
        return <StudentsIndex
          loading={this.state.loading}
          units={this.state.units}
          students={this.state.students}
          oneStudent={this.fetchOne}
          newStudent={this.createStudent}
          selectStudent={this.selectStudent}
        />
      // One students's profile page with all data
      case 'Student Profile':
        return <StudentProfile
          editStudent={this.editStudent}
          handleDeleteStudent={this.handleDeleteStudent}
          student={this.state.selectedStudent}
          studentUnit={this.state.studentUnit}
          setView={this.setView}
        />;
      // view to create a student (form)
      case 'Create student':
        return <CreateForm
          newStudent={this.createStudent}
        />
      // view to update student profile
      // two class components on one page
      case 'Update Student':
        return (
          <div>
            <div className="updates-grid-container">
              <div className="updates-grid-cell">
                <UpdateStudent
                  students={students}
                  selectedStudent={selectedStudent}
                  onSubmit={this.updateStudent}
                />
              </div>
              <div className="updates-grid-cell middle-cell">
                <p className="updateStudentTitle">{this.state.selectedStudent.name}</p>
                {/* <img src='' alt={'Sorry, No Image'} height="250" width="250" /> */}
              </div>
              <div className="updates-grid-cell">
                <UpdateUnits
                  selectedStudent={selectedStudent}
                  units={studentUnit}
                  onSubmit={this.editStudentUnits} />
              </div>
            </div>
          </div>
        )
      // unit view :: all units for all students
      case 'Unit':
        return <Unit
          units={units}
          selectStudent={this.selectStudent}
          students={this.state.students} />

      // create units for new student view
      case 'Create Unit':
        return <CreateUnit
          selectedStudent={selectedStudent}
          newUnit={this.createUnit}
        />
    }
  }

  // handles the click of the nav buttons 
  // sets state to the current view and fetches most current units
  handleLinkClick(link) {
    fetchAllUnits()
      .then(data => {
        this.setState({
          currentView: link,
          units: data.units
        });
      })
  }

  // renders between each the switch statement with a header on all pages
  render() {
    const links = [
      'Create student',
      'Unit'
    ]
    return (
      <div className="App">
        <Header
          homeView={this.headerRenderToHome.bind(this)}
          onClick={this.handleLinkClick.bind(this)}
          links={links} />
        {this.determineWhichToRender()}

      </div>
    );
  }
}

export default App;