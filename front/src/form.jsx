<div className='App2'>
        <form action="" className='login-form'>
        <div className='form-inner'>
        <h2>ADD STUDENT</h2>
        {/*error*/}
        <div className='form-group'>
            <label htmlFor="name">NAME:</label>
            <input type="text" id='name' name='name'/>
        </div>
        <div className='form-group'>
            <label htmlFor="course">COURSE:</label>
            <input type="text" id='courses' name='course'/>
        </div>
        <div className='form-group'>
            <label htmlFor="gender">GENDER:</label>
            <input type="text" id='gender' name='gender'/>
        </div>
        <input type="submit" value="submit" className='btn btn-warning' />
        </div>
    </form>
    </div>