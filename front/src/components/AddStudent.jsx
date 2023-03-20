import axios from 'axios';
import React, { useState , useEffect } from 'react';
// import { students } from './TableSearch';
import { useNavigate } from 'react-router-dom';
import './login.css'

const AddStudent = ({students}) => {

    const [newStudent,setNewStudent] = useState({firstName:"",lastName:"",mobile:"",email:""})
    const [firstNameError , setFirstNameError] = useState("")
    const [lastNameError , setLastNameError] = useState("")
    // const [mobileError , setMobileError] = useState("")
    // const [emailError , setEmailError] = useState("")

    const addStudent = (student) => {
        if(student.Firstame !== "" && student.lastName !== "" && student.mobile !== "" && student.email !==""){
            students.push({id:students.length+1 , ...student})
        }else if (!student.firstName ){
            setFirstNameError("firstName is required")
        }else if (!student.lastName ){
            setLastNameError("lastName is required")
        }
        // else if(!student.mobile){
        //     setGenderError("Gender is required")
        // }
     };

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // addStudent(newStudent)

        const data = {
            firstName:newStudent.firstName,
            lastName:newStudent.lastName,
            mobile:newStudent.mobile,
            email:newStudent.email,
        }

        await axios.post("http://localhost:5000/students/" , data)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
            Navigate('/students')

    }

  return (
    <div className='App2'>
    <form action="" className='login-form' onSubmit={handleSubmit} method="POST">
    <div className='form-inner'>
    <h2>ADD STUDENT</h2>
    <div className='form-group'>
        <label htmlFor="fname">FIRST-NAME:</label>
        <input type="text" id='fname' name='firstName' onChange={(e) => setNewStudent({...newStudent ,firstName: e.target.value})} value={newStudent.firstName}/>
        <p className='text-danger'>{firstNameError}</p>
    </div>
    <div className='form-group'>
        <label htmlFor="lname">LAST-NAME:</label>
        <input type="text" id='lname' name='lastName' onChange={(e) => setNewStudent({...newStudent ,lastName: e.target.value})} value={newStudent.lastName}/>
        <p className='text-danger'>{lastNameError}</p>
    </div>
    <div className='form-group'>
        <label htmlFor="mobile">MOBILE:</label>
        <input type="number" id='mobile' name='mobile' onChange={(e) => setNewStudent({...newStudent ,mobile: e.target.value})} value={newStudent.mobile}/>
        {/* <p className='text-danger'>{courseError}</p> */}
    </div>
    <div className='form-group'>
        <label htmlFor="email">EMAIL:</label>
        <input type="email" id='email' name='email' onChange={(e) => setNewStudent({...newStudent ,email: e.target.value})} value={newStudent.email}/>
        {/* <p className='text-danger'>{genderError}</p> */}
    </div>
    <input type="submit" value="Add Student" className='btn btn-warning' />
    </div>
</form>
</div>
  )
            
        

 
  
}

export default AddStudent;