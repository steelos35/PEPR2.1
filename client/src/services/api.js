// set base_url -- heroku url OR localhost
const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://vast-ravine-47572.herokuapp.com/';



//fetch all students
export function fetchStudents() {
    return fetch(`${BASE_URL}/students`)
        .then(resp => resp.json())
        .catch(e => {
            throw Error(e);
        });
}

// fetch all units
export function fetchAllUnits() {
    return fetch(`${BASE_URL}/units`)
        .then(resp => {
           return resp.json()})
        .catch(e => {
            throw Error(e);
        });
}

// fetch one unit by id
export function fetchOneUnit(id) {
    return fetch(`${BASE_URL}/units/${id}`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e)
    })
}

// fetch one student by id
export function fetchOneStudent(id) {
    return fetch(`${BASE_URL}/students/${id}`)
        .then(resp => resp.json());
}

// update one student
export function updateStudent(students) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(students),
        headers: {
          'Content-Type': 'application/json'
        }
      };
    return fetch(`${BASE_URL}/students/${students.id}`, opts)
    .then(resp => resp.json());
}

// update one unit
export function updateUnits(student) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return fetch(`${BASE_URL}/units/${student.students_id}`, opts)
        .then(resp => resp.json());
}

// create one students
export function saveNewStudent(student) {
    const opts = {
        method: 'POST',
        body: JSON.stringify({ student_data: student }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/students`, opts)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// create new unit for student
export function saveNewUnit(student, unit) {
    const opts = {
        method: 'POST',
        body: JSON.stringify({ unit_data: unit }),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/students/${student.id}/units`, opts)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// delete one student
export function deleteStudent(student) {
    const opts = {
        method: 'Delete',
    }
    return fetch(`${BASE_URL}/students/${student.id}`, opts)
    .catch ((e) => {
        throw Error(e);
    });
}