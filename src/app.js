const express = require("express");
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to Homepage");

});
app.post("/login",(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body
    if(password=="1234"){
        res.send("Login Successfull!!!");
    }
    else{
        res.send("Password Is Incorrect ");
    }

});
app.post("/register",(req,res)=>{
    res.send("My Name Is Khan");

});
app.post("/signup",(req,res)=>{
    res.send("You have successfully created your account!!!");

});

app.listen(5000,()=>{
    console.log("SERVER LISTEN AT PORT 5000");
}
);
