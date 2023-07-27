const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to Homepage");

});
const AuthMidd = (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body
    if (password == "1234") {
        console.log("Password Is Correct!!!");
        next()
    }

    else {
        res.send("Password Is Incorrect ");
        console.log("Incorrect");
    }




}
app.post("/login", AuthMidd, (req, res) => {
    res.send("Login Successfull!!!");

});
app.post("/register", (req, res) => {
    res.send("My Name Is Khan");

});
app.post("/signup", (req, res) => {
    res.send("You have successfully created your account!!!");

});
const AuthRoute = require("./routes/auth");
app.use("/api", AuthRoute)
const Cart = require("./routes/cart");
app.use("/cart", Cart)
mongoose.connect(process.env.DB).then(() => {
    console.log("Database is connected successfully!!!");
}).catch(err => {
    console.log("Database is not connected!!!");
})
app.listen(5000, () => {
    console.log("SERVER LISTENING AT PORT 5000");
}
);
