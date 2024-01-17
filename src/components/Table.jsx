import React from "react";
import './App.css';
const Table = ({ studentList, onEdit, onDelete }) => {

  return (
    <div className='d-flex'>       
     <div className="card" id="cardtable">
    <div className="bg-primary p-2" id="tbl" >
      <table className="list" id="studentList">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>DOB</th>
          <th>Age</th>
          <th>E-mail</th>
          <th>Mobile No</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="text-light" id="tbl_body`">
      {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.fullName}</td>
                <td>{student.dob}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.mobileno}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
                <td>
                  <button className=" bg-green-500 px-6 py-2 m-2 rounded-2xl		" onClick={() => onEdit(index)}>Edit</button>
                  <button className="bg-red-800 px-4 py-2 m-2 rounded-2xl" onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody> 
      </table>
    </div>
  </div></div>
  )
}

export default Table