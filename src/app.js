const express = require("express");

const app = express();

const {connectDB} = require("./config/database");


connectDB().then(()=>{
    console.log("Data Connection esablished")
    app.listen(3000,()=>{
        console.log("Listening on the port");
    });
})
.catch(()=>{
    console.error("Some error")
})

// mongodb+srv://simranarora839:Simran%40297@simrandata.3l6si.mongodb.net/
// const URI = "mongodb+srv://simranarora839:Simran@297@simrandata.3l6si.mongodb.net/"
