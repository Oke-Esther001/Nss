const express = require("express")
const ejs = require("ejs")
const app = express()
const port = 5000


app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("index", {Name:"Kehnieeeee"})
})

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/SignUp", (req, res) => {
    res.sendFile(__dirname + "/SignUp.html");
})

app.get("/LogIn", (req, res) => {
    res.sendFile(__dirname + "/LogIn.html");
})

app.listen(port,(err)=>{
    if (err) {
        console.log("I am running on PORT + port");
    }else {
        console.log("I'm running on 5000");
    }
})