import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<StudentList />} />
          <Route exact path="/add" element={<AddStudent />} />
          <Route exact path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
