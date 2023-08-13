const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/user.models")


require('dotenv').config()


const UserRouter = express.Router()

UserRouter.post("/api/register", async (req, res) => {

  try {

    const { name, email, password, address } = req.body;

    // checking if user present
    const UserExits = await UserModel.findOne({ email })

    if (UserExits) {
      return res.status(201).json({ msg: "User already Present" })

    }

    bcrypt.hash(password, 8, async (err, hash) => {

      if (err) {
        res.send({ "msg": "Something is Wronge", "err": err.message })
      } else {

        const user = new UserModel({ name, email, password: hash, address })
        await user.save()
        res.send({ "msg": " New User Registered Success" })



      }
    })
  } catch (err) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

UserRouter.post("/api/login", async (req, res) => {

  try {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    console.log(user)

    if (!user) {
      return res.status(401).json({ message: "Invalid username Or password" })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      return res.status(201).json({ message: "Invalid username Or password" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token });

  } catch (err) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

UserRouter.put('/api/user/:id/reset', async (req, res) => {
  try {
    const { id } = req.params;
    const { currPassword, newPassword } = req.body;


    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    const passwordMatch = await bcrypt.compare(currPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Wrong current password' });
    }


    const hashedPassword = await bcrypt.hash(newPassword, 8);


    await UserModel.findByIdAndUpdate(id, { password: hashedPassword });

    //   res.status(204).json({msg: "password reset succesfully"});
    res.send("successfully  reset password")

  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = { UserRouter }

