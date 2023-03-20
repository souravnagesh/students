import './App.css';
import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import axios from "axios";
import TableSearch from './components/TableSearch';
import {Login} from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import Students from './components/Students';
import ViewStudent from './components/ViewStudent';
import UpdateStudent from './components/UpdateStudent';

function App() {

  const [students,setStudents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/students/")
    .then((res) => {
      console.log(res.data)
      setStudents(res.data)
    })
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/login' element = {<Login  />}/>
          <Route path='/studentsrecord' element = {<TableSearch students={students} />}/>
          <Route path='/students' element = {<Students students={students}/>}/>
          <Route path='/addStudent' element = {<AddStudent students={students} />}/>
          <Route path='/editStudent/:id' element = {<UpdateStudent />}/>
          <Route path='/student/:id' element = {<ViewStudent students={students}/>}/>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
