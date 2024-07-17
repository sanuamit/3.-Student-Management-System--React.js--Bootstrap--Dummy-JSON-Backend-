import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/studentService";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ name, age, course });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
