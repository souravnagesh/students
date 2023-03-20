import React,{useEffect, useState} from 'react';
import { Link, redirect } from 'react-router-dom';
import {Table} from './Table';
// import { students } from './TableSearch';
import { useNavigate } from 'react-router-dom';
import ConvertToCSV from './ConvertToCSV';
import ReadFromCSV from './ReadFromCSV';
import axios from 'axios';

const Students = () => {
  
  const [data , setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/students/")
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  },[])

  let User = 12;

  const Navigate = useNavigate()

  const checkAuth = () => {
    if (User === null){
      alert("Login to Add Student")
      Navigate('/login')
    }else{
      Navigate('/addStudent')
    }
  }

  return (
    <div>
        <ReadFromCSV />
        <div className='navbar d-flex justify-content-between bg-light'>
        <button  onClick={checkAuth} className='btn btn-warning btn-sm'>ADD</button>
        <ConvertToCSV students={data}/>
        <Link to='/studentsrecord' className='btn btn-warning btn-sm'>Search</Link>
        </div>
        <Table students={data}/>
  
    </div>
  )
}

export default Students