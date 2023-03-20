import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useNavigate , useParams} from 'react-router-dom';

export const UpdateStudent = () => {

  const navigate =useNavigate();
  const params = useParams();
  const {id} = params;

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [mobile,setMobile] = useState(null)
  const [email,setEmail] = useState("")

  const handleFirstName = (e) => {

    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    setLastName(e.target.value)
  };

  const handleMobile = (e) => {
    setMobile(e.target.value)

  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
    .then(res => {
      setFirstName(res.data[0].firstName)
      setLastName(res.data[0].lastName)
      setMobile(res.data[0].mobile)
      setEmail(res.data[0].email)
    });
    axios.get("http://localhost:5000/students")
  } , [])
  const handleSubmit = async(e)  => {
    e.preventDefault();
    
    const data = {
      firstName:firstName,
      lastName:lastName,
      mobile:mobile,
      email:email,
  }
  console.log(data)
  console.log(id)

     axios.put(`http://localhost:5000/students/${id}/edit` , data)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
  })
  navigate('/')
  }
 
  return (


    <div className='App2'>
        <form action="" className='login-form' onSubmit={handleSubmit} method="POST">
        <div className='form-inner'>
        <h2>EDIT STUDENT</h2>
        {/*error*/}
        <div className='form-group'>
            <label htmlFor="name">FIRST-NAME:</label>
            <input type="text" id='name' name='firstName' value={firstName} onChange={handleFirstName} />
        </div>
        <div className='form-group'>
            <label htmlFor="lastName">LAST_NAME:</label>
            <input type="text" id='lastName' name='lastName' value={lastName} onChange={handleLastName} />
        </div>
        <div className='form-group'>
            <label htmlFor="mobile">MOBILE:</label>
            <input type="number" id='mobile' name='mobile' value={mobile} onChange={handleMobile} />
        </div>
        <div className='form-group'>
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id='email' name='email' value={email} onChange={handleEmail} />
        </div>
        <input type="submit" value="submit" className='btn btn-warning' />
        </div>
    </form>
    </div>
  )
}
 export default UpdateStudent;