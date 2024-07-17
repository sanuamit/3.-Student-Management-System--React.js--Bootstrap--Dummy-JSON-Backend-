import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editStudent, getStudents } from "../services/studentService";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getStudents();
        const student = response.data.find((s) => s.id === parseInt(id));
        if (student) {
          setName(student.name);
          setAge(student.age);
          setCourse(student.course);
        } else {
          console.log(`Student with id ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editStudent(id, { name, age, course });
      navigate("/");
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
