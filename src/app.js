const express = require("express");

const app = express();


app.use("/",(req,res)=>{
    res.send("HOme APge");
})
app.listen(3000,()=>{
    console.log("Listening on the port");
})