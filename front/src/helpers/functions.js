 const validateForm = (values) => {
    const errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 3){
        errors.password = "Password Length should be greater than 4 characters"
    }else if(values.password.length > 10){
        errors.password = "Password Length should not exceed greater than 10 characters"
    }
    return errors;
};

const loginVerify = (details) => {
    if(details.name !== ""){
        return true
    }else{
        return false
    }
}





export {
    validateForm , loginVerify
}
