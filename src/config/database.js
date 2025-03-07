const mongoose = require("mongoose");

const connectDB = async () =>{
   await mongoose.connect("mongodb+srv://simranarora839:Simran%40297@simrandata.3l6si.mongodb.net/devTinder")
}

module.exports = {connectDB}
