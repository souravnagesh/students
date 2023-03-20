import React from 'react'
import logo from '../images/icon1.ico'


export const adminUser = {
  email:'admin@gmail.com',
  password:'admin'
}; 


const Home = () => {

  return (
    <>
    <div className='bg-dark text-light'>
        <h1>Welcome To Students Database Website</h1>
        <h2>This is Home Page </h2>
    </div>
    <img src={logo} alt="logo" className='img-fluid img-thumbnail rounded-pill bg-light'/>
    
    </>
   )
}

export default Home