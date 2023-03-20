import React,{useState , useEffect} from 'react';
import { validateForm , loginVerify } from '../helpers/functions';


const LoginForm = ({login , error}) => {
    const [details,setDetails] = useState({name:"" , email:"" , password:""})
    const [showPassword ,setShowPassword] = useState(true)
    const [formErrors ,setFormErrors] = useState({})

    
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        setFormErrors(validateForm(details))
        login(details);
    
        
    };

    useEffect(() =>{
        console.log(formErrors);
        if(Object.keys(formErrors).length ===0 ){
            console.log(details)
        }
     },[formErrors])

    const handleSwitch = (e) => {
        e.preventDefault() 
        return setShowPassword(!showPassword)
    }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <div className="form-inner">
            <h2>LOGIN</h2>
            { error !== "" ? (<div className='error'>{error}</div>) : <></>}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className='form-input' id='name' name='name' onChange={(e) => setDetails({...details , name:e.target.value})} value={details.name} />
                <p className='text-danger'>{formErrors.name}</p>
            </div>
             <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className='form-input' id='email' name='email' onChange={(e) => setDetails({...details , email:e.target.value})} value={details.email}/>
                <p className='text-danger'>{formErrors.email}</p>
             </div>
             <div className="form-group">
                <label htmlFor="password">Password:</label>
                <div className='btn-group mr-1'>
                <input type={showPassword  ? "password" : "text" } className='form-input' id='password' name='password' onChange={(e) => setDetails({...details , password:e.target.value})} value={details.password} />
                <button onClick={handleSwitch} className="btn btn-info btn-sm">{showPassword  ? "show" : "hide"}</button>
                </div>
                <p className='text-danger'>{formErrors.password}</p>
             </div>
             <input type="submit" value="Login" className='btn btn-warning' />
        </div>
    </form>
  )
}

export default LoginForm