import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await getStudents();
    setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="btn btn-primary mt-3 me-2">
        Add Student
      </Link>
    </div>
  );
};

export default StudentList;
