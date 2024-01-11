const userModel = require("../models/userModel.js")
const JWT = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const { name, email, password,confirmpassword } = req.body;
    if (!name || !password || !email || !confirmpassword) {
      return res.status(200).send({
        success:false,
        message:"Invalid details"
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exist! Please Login",
      });
    }

    if(password != confirmpassword){
      return res.status(200).send({
        success: false,
        message: "Passwords don't match",
      });
    }
    const user = await new userModel({
      name,
      email,
      confirmpassword,
      password,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async(req,res) => {
  try{
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(200).send({
        success:false,
        message:"Invalid Credentials"
      })
    }
    const user = await userModel.findOne({email});
    if(!user){
      return res.status(404).send({
        success: false,
        message:"User does not exist"
      })
    }
    if(password !== user.password){
      return res.status(200).send({
        success: false,
        message: "Passwords don't match"
      })
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7h",
    });
    user.token = token;
    res.status(201).send({
      success: true,
      message: "Login Successfull",
      user:{
        _id:user._id,
        email:user.email,
        password:user.password,
        name:user.name,
      },
      token,
    })
  }catch(error){
    console.log(error);
  }
}

module.exports = {register,login}