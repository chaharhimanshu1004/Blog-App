const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usermodel = require("../modals/User");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existinguser = await usermodel.findOne({ username });
    if (existinguser) {
      return res.status(400).json({ message: "User already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new usermodel({
      username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "User registered Successfully!!" });
  } catch (err) {
    res
      .status(500)
      .json({
        message:
          "Error in Registering the user! Please try again after some time!",
      });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await usermodel.findOne({ username });
    if (!userExists) {
      return res.status(400).json({ message: "Error! User doesn't exists!!" });
    }
    const isValidPassword = await bcrypt.compare(password, userExists.password);
    if (!isValidPassword) {
      return res.json({ message: "Password doesn't match" });
    }
    //  --------    jwt token -- and cookie    ------------
    const token = jwt.sign(
      { username, id: userExists._id },
      process.env.secret,
    );
    res.cookie("token", token,{httpOnly:true});
    res.status(200).json({ message: "Login successful", id: userExists._id, username,token });
    
    
    
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({
        message: "Error in Loggin in ! Please try again after some time!",
      });
  }
});
module.exports = router;
