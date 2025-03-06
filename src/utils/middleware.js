const adminAuth = (req,res,next)=>{
    const token = "xyz";
    const isUserAuthorized = token === "xyz" ;
    console.log(token,isUserAuthorized);
    if(!isUserAuthorized)
    {
        res.status(401).send("Not authorzied")
    }
    else{
       next();
    }
}

module.exports = {adminAuth};

