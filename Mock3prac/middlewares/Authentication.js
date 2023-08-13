var jwt = require('jsonwebtoken');


const Authentication=(req,res,next)=>{
    


    try {
        let token=req.headers.authorization

        console.log(token)
        var decoded = jwt.verify(token, process.env.token);
        
        console.log(decoded.userid)
        req.body=decoded.userid
        next()
    
    } catch (error) {
        return res.status(401).json({message : "Unauthorised" ,err : err.message})
    }
   
}

module.exports={
    Authentication
}