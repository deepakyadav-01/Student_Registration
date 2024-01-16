import React from "react";
import './App.css';
const Table = () => {

  return (
    <div className='d-flex flex flex-wrap justify-around'>       
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
          <th id="th_hea">Action</th>
        </tr>
      </thead>
      <tbody class="text-light"></tbody> 
      </table>
    </div>
  </div></div>
  )
}

export default Table