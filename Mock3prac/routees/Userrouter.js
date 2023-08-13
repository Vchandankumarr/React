const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

const Userrouter = express.Router();

const { UserModel } = require("../models/usermodel");


Userrouter.get("/", (req, res) => {
  res.send("User ROuter...!!!!");
});

Userrouter.post("/createuser", async (req, res) => {
  try {
    console.log(req.body);
    let { name, email, password } = req.body;

    let existing_user = await UserModel.find({ email });
    console.log(existing_user);
    if (existing_user.length > 0) {
      res.send("User already registerd please login");
    } else {
        bcrypt.hash(password, 8, async (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          let newuser = new UserModel({ name, email, password :hash});
          await newuser.save();


          res.send({ response: "new User created", newuser });
        }
      });
    }
  } catch (error) {
    res.send("error");
  }
});


Userrouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log(email,password)

        const user=await UserModel.find({email})
        if(user.length){
            bcrypt.compare(password, user[0].password, async(err, result)=> {
                // result == true
                if(result){
                    var token = jwt.sign({ userid: user[0]._id }, process.env.token);

                    res.send({token,res:"Login sucessfull"})
                    
                }else{
                    res.send("Wrong credentials")
                }
            });
            

        }else{
            res.send("User NOt registerd")
        }
        console.log(user)

       
    } catch (error) {
        
    }
})


module.exports = {
  Userrouter,
};
