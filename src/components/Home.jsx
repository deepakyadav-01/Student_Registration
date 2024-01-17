import React, { useState,useEffect } from 'react';
import Navbar from "./NavBar";
import Table from "./Table";
import Form from "./Form";
import { toast } from 'react-toastify';
import './App.css'
const Home = () => {
  // other fxn
  const [studentList, setStudentList] = useState([]);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    age: '',
    email: '',
    mobileno: '',
    gender: '',
    address: '',
  });
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('studentData')) || [];
    setStudentList(storedData);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('studentData', JSON.stringify(data));
  };

  const onFormSubmit = (event, formData) => {
    event.preventDefault();

    if (selectedStudentIndex !== null) {
      // Update existing employee
      const updatedStudentList = [...studentList];
      updatedStudentList[selectedStudentIndex] = formData;
      setStudentList(updatedStudentList);
      setSelectedStudentIndex(null);
    } else {
      // Add new employee
      setStudentList([...studentList, formData]);
    }

    // Save data to local storage
    saveToLocalStorage([...studentList, formData]);
  };

  const onEdit = (index) => {
    console.log('onEdit clicked:', index);
    const selectedStudent = studentList[index];
    console.log('Selected Student:', selectedStudent);
  
    const updatedFormData = {
      fullName: selectedStudent.fullName || '',
      dob: selectedStudent.dob || '',
      age: selectedStudent.age || '',
      email: selectedStudent.email || '',
      mobileno: selectedStudent.mobileno || '',
      gender: selectedStudent.gender || '',
      address: selectedStudent.address || '',
    };
    console.log('Updated Form Data:', updatedFormData);
  
    // Log the current state before updating
    console.log('Current Form Data State:', formData);
  
    // Set the form data in the EmployeeForm component
    setSelectedStudentIndex(index);
    setFormData(updatedFormData);
  
    // Log the state after updating
    console.log('Updated Form Data State:', formData);
  };
  
  const onDelete = (index) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this employee data?");
    
    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      const updatedStudentList = [...studentList];
      updatedStudentList.splice(index, 1);
      setStudentList(updatedStudentList);

      toast.error('❌ Data deleted sucessfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };

  // theme
  const [themeColor, setThemeColor] = useState('gray'); // Default theme color


  const changeTheme = (color) => {
    
    setThemeColor(color);
    document.getElementById('cardtable').style.backgroundColor=color;
    document.getElementById('submit').style.backgroundColor=color;
    document.getElementById('reset').style.backgroundColor=color;
    document.getElementById('studentList').style.backgroundColor=color;
    document.getElementById('tbl').style.backgroundColor=color;

    
document.getElementById('btn_gray').addEventListener('click',function(){
  document.body.style.backgroundColor='#9ca3af';
});
document.getElementById('btn_red').addEventListener('click',function(){
  document.body.style.backgroundColor='#f87171';

});
document.getElementById('btn_orange').addEventListener('click',function(){
  document.body.style.backgroundColor='#fb923c';

});
document.getElementById('btn_green').addEventListener('click',function(){
  document.body.style.backgroundColor='#4ade80';

});
document.getElementById('btn_teal').addEventListener('click',function(){
  document.body.style.backgroundColor='#2dd4bf';

});
document.getElementById('btn_blue').addEventListener('click',function(){
  document.body.style.backgroundColor='#60a5fa';
});
document.getElementById('btn_purple').addEventListener('click',function(){
  document.body.style.backgroundColor='#c084fc';
});
document.getElementById('btn_pink').addEventListener('click',function(){
  document.body.style.backgroundColor='#f472b6';
});

  };


  return (
    <div className="d-flex">
    <div className='flex flex-wrap justify-evenly '>
      <div
        className={`h-screen w-screen bg-${themeColor}-400 overflow-hidden absolute flex items-center`} id='main_bg' 
        style={{ zIndex: -1 }}
      >
        <div className={`w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-${themeColor}-300 rounded-full`}></div>
        <div className={`w-64 h-64 -mx-32 bg-${themeColor}-300 opacity-50 rounded-full`} id='des_1'></div>
        <div className={`w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-${themeColor}-300 rounded-full`} id='des_2'></div>
        <div className={`w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-${themeColor}-300 rounded-full`} id='des_3'></div>
      </div>
      
      <div className="fixed h-screen right-0 top-0 items-center flex">
        <div className={`p-2 bg-white border-l-4 border-t-4 border-b-4 border-${themeColor}-300 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg z-10 flex-col`}>
          {/* Theme buttons */}
          {['gray', 'red', 'orange', 'green', 'teal', 'blue', 'purple', 'pink'].map((color) => (
            <button
              key={color}
              id={`btn_${color}`} 
              className={`bg-${color}-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none`}
              onClick={() => changeTheme(color)}
            ></button>
          ))}
        </div>
        <div className='hidden bg-gray-300 bg-red-300 bg-orange-300 bg-green-300 bg-teal-300 bg-blue-300 bg-purple-300 bg-pink-300'/>
        <div className='hidden bg-gray-400 bg-red-400 bg-orange-400 bg-green-400 bg-teal-400 bg-blue-400 bg-purple-400 bg-pink-400'/>
        <div className='hidden bg-gray-500 bg-red-500 bg-orange-500 bg-green-500 bg-teal-500 bg-blue-500 bg-purple-500 bg-pink-500'/>


      </div>
      <Navbar/>

        <Form onFormSubmit={onFormSubmit}
        selectedStudent={studentList[selectedStudentIndex]}/>
        <Table  studentList={studentList}
          onEdit={onEdit}
          onDelete={onDelete}/>
        </div>
    </div>
  )
}

export default Home