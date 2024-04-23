 export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if(!email_pattern.test(values.email)){
        errors.email = "Email did not match"
    }

 
    if(!password_pattern.test(values.password)){
        errors.password = "Password did not match"
    }

    return errors;
 }