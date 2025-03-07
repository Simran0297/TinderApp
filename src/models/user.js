const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    lastName:{
        type : String 
    },
    
    password : {
        type: String,
        required:true
    },
    age:{
        type: Number,
        min : 18
    },
    emailId:{
        type: String,
        required:true,
        lowercase:true,
        trim:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error ("Invalid Email Address")
            }
        }
    
    },
    gender: {
        type: String,
        lowercase:true,
        validate(value)
        {
            if(!["male","female","others"].includes(value))
            {
                throw new Error("Gender is not valid Value")
            }
        }
    },
    photourl :{
        type: String,
        default : "https://pinnacle.works/dummy-image/"
    },
    about:{
        type: String,
        default : "This is the default about me of the user!!"
    },
    skills:{
        type: [String]
    }
},{timestamps:true})

const user = mongoose.model("User",userSchema);

module.exports = user;