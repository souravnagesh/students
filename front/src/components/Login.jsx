import React,{useState} from 'react';
import LoginForm from './LoginForm';
import './login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => { 
    
      const adminUser = {
        email:'admin@gmail.com',
        password:'admin'
      }; 
    const navigate = useNavigate()

    const [user,setUser] = useState({name:"",email:""});
    const [error,setError] = useState("");

    const logIn = (details) =>{
        console.log(details);
        if(details.name !== "" && details.email === adminUser.email && details.password === adminUser.password)
        {
            console.log("LOGGED IN");
            setUser({
                name:details.name,
                email:details.email
            })
        }else{
            setError(<span className='text-dark bg-danger'>INVALID CREDENTIALS</span>)
        }
    };

    const logOut = () => {
        console.log("LOGOUT")
        setUser({
            name:"",
            email:""
        })
        navigate('/')
    };

  return (
    <div className='App2'>
        
        {
           (user.email !== "" ) ?
            <div className='welcome'>
            <h1>Welcome <span className='text-success'>{user.name}</span></h1>
            <button onClick={logOut} className='btn btn-info'>Logout</button>
            
            </div> :
            <LoginForm login={logIn} error={error}/>
        }
    </div>
  )
}

export {
    Login
} 