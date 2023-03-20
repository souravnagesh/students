import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  let User =null  ;

  return (
    <div className='navbar d-flex justify-content-around bg-dark'>
        <Link to='/' className='btn btn-primary btn-sm'>Home</Link>
        <Link to='/students' className='btn btn-primary btn-sm' >Students</Link>
        {User === null ?
          <Link to='/login' className='btn btn-primary btn-sm'>Login</Link> :
          <button to='/login' className='btn btn-primary btn-sm'>Logout</button> 
        }
    </div>
  )
}

export default Navbar