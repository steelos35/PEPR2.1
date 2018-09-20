import React from 'react';


//List all students (include each student's name, age and grade).
//Display in a grid.
function StudentsIndex(props) {
    let content;
    if (!props.students) {
        content = (
            <div className="loading">
                {/* <h1></h1> */}
                <img src="" alt="" className="loading" />
            </div>)
    } else {
        content =
            <div>
                <div className="AllStudentsPg">
                    <p className="pageHeader">Class Roster</p>
                    <div className="grid-container">
                        {
                            props.students.map(student => (
                                <div key={student.id} className="grid-item"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        const units = props.units.filter(units => {
                                            return units.student_id === student.id
                                        })
                                        props.selectStudent(student, units)
                                    }}>
                                    <p className="studentName">{student.student_name}</p>
                                    <p className="desc">{student.age}, {student.grade}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
    }
    return (content)
}

export default StudentsIndex;