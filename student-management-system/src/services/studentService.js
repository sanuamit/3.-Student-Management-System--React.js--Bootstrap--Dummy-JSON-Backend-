import axios from "axios";

const API_URL = "http://localhost:5000/students";

export const getStudents = () => axios.get(API_URL);
export const addStudent = (student) => axios.post(API_URL, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
export const editStudent = (id, student) =>
  axios.put(`${API_URL}/${id}`, student);
