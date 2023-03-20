import React,{useState} from 'react'
import {UpdateStudent} from './UpdateStudent';
import ViewStudent from './ViewStudent';
import { Link , useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';


const Table = ({students}) => {
    const[updateStudent , setUpdateStudent] = useState(-1)
    const navigate = useNavigate()


    const deleteStudent = async (id) => {
        // alert("student deleted")
        await axios.delete(`http://localhost:5000/students/${id}/delete`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        navigate('/')
    };


    const handleEdit = (id) => {
        setUpdateStudent(id)
        navigate(`/editStudent/${id}`)
    }

  return (
    <div>
        {
            students.length < 0 ? <h1>No students Record found</h1> :
                <table className='table table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>MOBILE</th>
                        <th>EMAIL</th>
                        <th>SHOW DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => {
                            return (
                                // updateStudent === student.id ? <UpdateStudent currentStudent={student} newstudents={newstudents} setNewStudents={setNewStudents} setUpdateStudent={setUpdateStudent} /> : 
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.mobile}</td>
                                    <td>{student.email}</td>
                                    <td><Link to={`/student/${student.id}`}  className='openModalBtn btn btn-primary' >Get Details</Link></td>
                                    <td><button className='btn btn-warning' onClick={() => handleEdit(student.id)}>Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteStudent(student.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        }
    </div>
  )
}


export {Table };