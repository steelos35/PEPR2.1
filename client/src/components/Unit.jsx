import React from 'react';

//Shows all students' units (pass or fail)
//Displays grades in a table
function Unit(props) {
    return (
        <div>
            <p className="unitTitle">Unit</p>
            <div>
                <table className="unitTable">
                    <tbody>
                        <tr>
                            <th>Unit<br />Name</th>
                            <th>Run</th>
                            <th>Gallop</th>
                            <th>Hop</th>
                            <th>Skip</th>
                            <th>Jump</th>
                        </tr>
                        {props.units.map(each => {
                            return (
                                <tr key={each.students_id}>
                                    <td className="name"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        const students = props.students.filter(students => {
                                            return students.id === each.students_id
                                        })
                                        props.selectStudent(each, students)
                                    }}>{each.unit_name}</td>
                                    <td>{each.run ? '✔️' : '-'}</td>
                                    <td>{each.gallop ? '✔️' : '-'}</td>
                                    <td>{each.hop ? '✔️' : '-'}</td>
                                    <td>{each.skip ? '✔️' : '-'}</td>
                                    <td>{each.jump ? '✔️' : '-'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Unit;
