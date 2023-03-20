import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Table} from './Table';

export const students = [
    {id:1 , firstName:'Bob' , lastName:'D', mobile:9559068785,email:"bob@gmail.com"},
    {id:2 , firstName:'Alice' ,lastName:'Dane', mobile: 1234586093,email:"alice@gmail.com"},
    {id:3 , firstName:'Charlie' ,lastName:'H', mobile: 4352586093,email:"charlie@gmail.com"},
    {id:4 , firstName:'Tenz' , lastName:'Patrick', mobile: 8904586093,email:"tenz@gmail.com"},
    {id:5 , firstName:'kylie' , lastName:'BM', mobile: 7564586093,email:"kylie@gmail.com"},
 ];

export const TableSearch = ({students}) => {

 const [searchItem , setSearchItem] = useState("");
 const [visibility,setVisibility] = useState(false);
 const [searchList , setSearchList] = useState({})

 const handleSubmit = (e) => {
    e.preventDefault();
 }

 const handleInput = (e) => {
    return setSearchItem(e.target.value)
 }

const search = (searchItem , students) => {
    return (students.filter((student) => {
        return (student.firstName.toLowerCase().startsWith(searchItem.toLowerCase()) === true)
    }))
}

const searchRecord = () => {
    setSearchList(search(searchItem , students))  
    setVisibility(!visibility)
}
    
  return (
    <div>
        <div className='navbar d-flex justify-content-between bg-light'>
        <Link to='/addStudent' className='btn btn-warning btn-sm'>ADD</Link>
        </div>

        <form action="" onSubmit={handleSubmit} className='form-inline'>
            <label htmlFor="search" className='text-secondary navbar-text'>Search: </label>
            <input type="text" className="searchInput form-control mr-sm-2 " id='search' name='search' placeholder='typehere' onChange={handleInput}/>
            <button type='submit' className='btn btn-outline-success my-2 my-sm-0' onClick={searchRecord}>Submit</button>
        </form> <br />
        { visibility && <Table students={searchList}/>}
    </div>
  )
}

export default TableSearch;