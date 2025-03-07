const validator = require("validator");
const signUpDataValidator = (req)=>{
    const {firstName,lastName,emailId,password} = req.body;
    console.log(req.body);
    if(!firstName.length===0 || !lastName.length===0)
    {
        throw new Error("Invalid Length of character")
    }
    else if(!validator.isEmail(emailId))
    {
        throw new Error("Invalid Email Entered");
    }
    else if(!validator.isStrongPassword(password))
    {
        throw new Error("Strong Password required")
    }

}


module.exports = {signUpDataValidator}