const models = require('../models')
const url = require('url');
const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer")
//const statusCodes = require("../config/StatusCode");

const registerUser = async (req,res) =>{
  res.json({ message: "Welcome to Register User." });

  /*const {email} = req.body
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "login",
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

try {
  const token = jwt.sign({email},process.env.TOKEN_KEY,{expiresIn: "30m"});
  const emailLink = `http://localhost:2000/confirm?token=${token}`
  
  let mailOptions = {
    from: process.env.SMTP_EMAIL,
    to:email,
    subject:"Välkommen till BrF Klintens bokningssystem för tvättstugan",
    html: `<p>Please click on the following link to confirm your email: <a href="${emailLink}">${emailLink}</a></p>. Please verify yourself within 30 minutes.`,
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  return res.status(200).json('Subscription email sent. Please check your inbox to verify your subscription')
} catch (error) {
  return res.status(500).json({error: error.message})
}*/
}

  module.exports={
    registerUser
    //validateUser,
    //completeRegistration,
   // getAllUsers,
    }