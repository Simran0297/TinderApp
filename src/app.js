const express = require("express");
const app = express();

const User = require("./models/user");

const {connectDB} = require("./config/database");
//for changing json string to JS object for all the API's
app.use(express.json());
//USer using FirstName
app.get("/user", async (req,res)=>{
    
    const userfirstName = req.body.firstName;
    try{
        const user = await User.find({firstName: userfirstName});
        if(user.length ===0)

            {
                res.send("User not Found")
            }
            else{
                res.send(user);
            }
    }
    catch(err)
    {
        res.status(404).send("SOmething went Wrong")
    }
})
//Feed API
app.get("/feed", async (req,res)=>{
    try{
        const allUsers= await User.find({})
        if(allUsers.length ===0)
        {
            res.status(404).send("No users Found")
        }
        else{
            res.send(allUsers)
        }
    }
    catch(err)
    {
        res.send("Something Went Wrong")
    }
  
})

//Find USer by ID
app.get("/userId", async(req,res)=>{
    const inputId = req.body.userId;
    try{
    const user = await User.findById(inputId);

    if(user.length===0)
    {
        res.status(404).send("User Not Found")
    }
    else{
        res.send(user);
    }
}
catch(err)
{
    res.send("Something Went Wrong")
}

})

function validateFirstName(name){
        const regex = /^([a-zA-Z]+)$/;
        const isValid = regex.test(name);
        return isValid;
        
}
app.post("/signup", async(req,res)=>{
    //Creating a new instance of the user Model
    const user= new User(req.body);
try{
    //firstName Validation
    if(!validateFirstName(req.body.firstName))
    {
        throw new Error("Invalid Name Format")
    }
    await user.save();
    res.send("User added successfully")
}
catch(err)
{
    res.send(err.message)
  }});

//Delete user
app.delete("/user", async (req,res)=>{
    const userId = req.body.userId;
    try{
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send("User deleted Successfully")
    }
    catch(err)
    {
        res.send("Cant delete user")
    }
})

//FindAndupdateUser

app.patch("/user/:userId", async(req,res)=>{
    const userId= req.params?.userId;
    
    const updateData = req.body;
  
    console.log(userId,updateData)
    try{
    // const ALLOWED_UPDATES = ["about","gender","age","skills"];
   
    // const isUpdateAllowed = Object.keys(updateData).every((k)=>{
    //     console.log(k);
    //     ALLOWED_UPDATES.includes(k);
        
    // })
    
    // if(!isUpdateAllowed)
    // {
    //     throw new Error("Update now allowed "+ err.message);
    // }
    if(data?.skills?.length>10)
    {
        throw new Error("Skills Cant be more than 10")
    }
    const updateUSer = await User.findByIdAndUpdate(userId,updateData,{runValidators:true});
    res.send("Data Updated Successfully")
    }
    catch(err)
    {
        res.send("Update Failed " + err.message)
    }
})

connectDB().then(()=>{
    console.log("Data Connection esablished")
    app.listen(3000,()=>{
        console.log("Listening on the port");
    });
})
.catch(()=>{
    console.error("Some error")
})


