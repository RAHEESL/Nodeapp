const express = require("express")
const router = express.Router();
const AuthMiddle = (req, res, next) => {
    console.log("hello");
    next()

}
router.get("/", AuthMiddle, (req, res) => {
    res.send("I'm Abhi, How Can I Help You!!!!!!")
});
router.get("/login", (req, res) => {
    res.send("Login Successfull!!!!!!")
});
router.get("/register", (req, res) => {
    res.send("Registration Successfull!!!!!!")
});
router.post("/login/:id/:name", (req, res) => {
    console.log(req.params.id);
    console.log(req.params.name);
    res.send("Value transfered successfully!!!")
});



module.exports = router