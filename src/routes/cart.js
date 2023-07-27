const express=require("express")
const cart=express.Router();
cart.get("/",(req,res)=>{
    res.send("I'm NIZ NIZAM , How Can I Help You!!!!!!")
});
cart.get("/login",(req,res)=>{
    res.send("Login into this page Successfull!!!!!!")
});
cart.get("/register",(req,res)=>{
    res.send("Registration into this page  Successfull!!!!!!")
});
module.exports=cart