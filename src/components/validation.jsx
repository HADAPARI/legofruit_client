 export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if(!email_pattern.test(values.email)){
        errors.email = "L’adresse e-mail ne correspondait pas"
    }

 
    if(!password_pattern.test(values.password)){
        errors.password = "Le mot de passe ne correspond pas"
    }

    return errors;
 }