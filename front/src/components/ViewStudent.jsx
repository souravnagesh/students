import React from 'react';
import './modal.css';
import { useParams , useNavigate } from 'react-router-dom';
// import { students } from './TableSearch';


const ViewStudent = ({students}) => {

  const Navigate = useNavigate()

  const params = useParams();
  // const {id} = params
  // console.log(students)

 

  return (
    <div className="modalBackground form-inner">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            Navigate('/students');
          }} className="btn btn-primary"
        >
          X
        </button>
      </div>
      { students.filter(stu => stu.id === parseInt(params.id)).map(student => {
        return (
          <>
            <div className="title">
        <h1>Student of ID : {student?.id}</h1>
      </div>
      <div className="body">
        <p>Student's FirstName: {student?.firstName}</p> 
        <p>Student's LastName: {student?.lastName}</p> 
        <p> ContactNumber: {student?.mobile}</p>
        <p> EmailID: {student?.email}</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            Navigate('/students');
          }}
           className='btn btn-warning' id="cancelBtn"
        >
          Cancel
        </button> 
      </div>
          </>
        )
      })}
    </div>
  </div>
  )
}

export default ViewStudent


